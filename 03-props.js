import React from 'react'
import { View, Image, Text } from 'react-native'

// 1 单个组件复用，通过this.props



class Greeting extends React.Component {

  render() {
   
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}</Text>
      </View>
    )
    
  }
}

export default class App extends React.Component {
  render () {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='lxe'></Greeting>
      </View>
    )
  }
}