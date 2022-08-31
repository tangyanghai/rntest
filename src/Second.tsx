import React, { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import _ from "lodash";
type IProps = {
	onCountChanged: (count: number,preCount:number) => void,
	count:number
}

type IState = {
	 list: number[]
}
export function Second(props:IProps){
	// console.log(`==== props`, props)
	const {count:pc,onCountChanged}=props
	const [list,setList] = useState([] as number[])

	useEffect(()=>{
		console.log(`==== props count changed ${pc}`)
		list.push(pc)
		setList([...list])
	},[pc])

	function onClick(){
		props.onCountChanged(pc+1,pc)
	}

	function _renderItem(o: { item: number, index: number }) {
		return (
			<Text>{o.item}</Text>
		)
	}

	return (
		<View
			style={{minHeight: 100, width: '100%', backgroundColor: 'gray'}}
		>

			<Button title={'456'} onPress={onClick}/>
			<FlatList
				style={{maxHeight:150}}
				data={list}
				renderItem={_renderItem}/>
		</View>
	);

}
