import React, { PureComponent } from 'react';
import { Button, FlatList, Text, View } from 'react-native';

class First extends PureComponent<unknown, { count:number,list:number[] }> {


	constructor(props: any) {
		super(props);
		console.log('======== constructor',new Date().getTime());
		this.state = {
			count: 0,
			list:[0]
		}

		this.onClick = this.onClick.bind(this);
		this._renderItem = this._renderItem.bind(this);
	}

	onClick() {
		let temp = this.state.count +1
		this.setState({count:temp})
		this.setState({list:[...this.state.list,temp]})
	}

	_renderItem(o:{item:number,index:number}){
		return (
			<Text>{o.item}</Text>
		)
	}

	componentDidUpdate(prevProps: Readonly<unknown>, prevState: Readonly<{ count?: number }>, snapshot?: any) {
		console.log('=====update',{snapshot,prevState,prevProps},new Date().getTime())
	}

	getSnapshotBeforeUpdate(prevProps: Readonly<unknown>, prevState: Readonly<{ count: number; list: number[] }>): any {
		let cs = this.state
		let cp = this.state
		console.log('=====before update',{cs,cp,prevState,prevProps},new Date().getTime())
		return null
	}

	render() {
		return (
			<View
				style={{minHeight: 100, width: '100%', backgroundColor: 'gray'}}
			>
				<Text>{this.state.count}</Text>
				<Button title={'123'} onPress={this.onClick}/>
				<FlatList
					data={this.state.list}
					renderItem={this._renderItem}/>
			</View>
		);
	}
}

export default First;
