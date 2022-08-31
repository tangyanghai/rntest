import React, { useState } from 'react';
import { Text, View } from 'react-native';
import First from './First';
import { Second } from "./Second";

const App = () => {
	const [count,setCount]=useState(0)

	function _onCountChanged(count:number,preCount:number){
		console.log(`======`,`on count changed count = ${count}, preCount = ${preCount}`)
		setCount(count)
	}

	return (
		<View
			style={{ backgroundColor: 'red', height: '100%', width: '100%' }}
		>
			<Text>{count}</Text>
			<First onCountChanged={_onCountChanged} count={count}/>
			<Second onCountChanged={_onCountChanged} count={count}/>
		</View>
	);
};
export default App;
