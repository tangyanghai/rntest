import React, { PureComponent } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

type IProps = {
	onCountChanged: (count: number,preCount:number) => void,
	count:number
}

type IState = {
	count: number, list: number[]
}

class First extends PureComponent<IProps,IState> {

	constructor(props: IProps) {
		super(props);
		console.log('======== constructor', new Date().getTime());
		this.state = {
			count: props.count,
			list: [props.count]
		}

		this.onClick = this.onClick.bind(this);
		this._renderItem = this._renderItem.bind(this);
	}

	onClick() {
		let temp = this.state.count + 1
		this.setState({count: temp})
		this.setState({list: [...this.state.list, temp]})
		this.props.onCountChanged(temp,this.state.count)
	}

	_renderItem(o: { item: number, index: number }) {
		return (
			<Text>{o.item}</Text>
		)
	}

	componentDidMount() {
		console.log('====mount',{cp:this.props,cs:this.state})
	}

	componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any) {
		console.log('=====update', {snapshot, prevState, prevProps}, new Date().getTime())
		// if (this.state.count != prevState.count) {
		// 	this.props.onCountChanged(this.state.count,prevState.count)
		// }
	}

	getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any {
		let cs = this.state
		let cp = this.state
		console.log('=====before update', {cs, cp, prevState, prevProps}, new Date().getTime())
		return null
	}

	render() {
		return (
			<View
				style={{minHeight: 100, width: '100%', backgroundColor: 'gray'}}
			>

				<Button title={'123'} onPress={this.onClick}/>
				<FlatList
					style={{maxHeight:150}}
					data={this.state.list}
					renderItem={this._renderItem}/>
			</View>
		);
	}
}

export default First;
