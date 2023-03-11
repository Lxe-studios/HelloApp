import React from 'react'
import { View, Image, Text } from 'react-native'

// state
// 初始化 constructor
// 改变state 数据用setState

class Blink extends React.Component {
  state = {isShowing: true}

  componentDidMount() {
    this.intervalid = setInterval(() => {
      this.setState(preState => ({
        isShowing: !preState.isShowing
      }))
    },1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalid)
  }

  render() {
    if(!this.state.isShowing) {
      return null
    }
    return <Text>{this.props.text}</Text>
    
  }
}

export default class BlinkApp extends React.Component {
  render() {
    return (
      <View>
        <Blink text='I Love to blink'/>
      </View>
    )
  }
}