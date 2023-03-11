import React from "react";
import { StyleSheet,View, Text,Button } from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'




 // navigation Params
 // 1.参数包装一个对象  2.把参数通过navigation.navigate（RouteName，{params go here}）的第二个参数传递给路由

class Homescreen extends React.Component {
  render() {
    
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Home Screen</Text>
        <Button title="Go to Detail" onPress={() => {
          let params = {itemId: 87,otherParams: 'lll'}
          // navigation.navigate('Detail) 将新的的路由 推送到栈导航器，
          this.props.navigation.navigate('detail',params)
        }}>
        </Button>

        <Button title="Go Back" onPress={() => {
          // push 直接添加，不同于navigation
          navigation.push('detail')
        }}>
        </Button>

        <Button title="Go Back" onPress={() => {
          // 一层一层 在栈中回退
          this.props.navigation.goBack()
        }}></Button>

        <Button title="Go Back" onPress={() => {
          // 一步回到 Home
          this.props.navigation.popToTop()
        }}></Button>
      </View>
    )
  }

  componentDidMount() {
    console.log('====================================');
    console.log('home-componentDidMount');
    console.log('====================================');
  }

  componentWillUnmount() {

  }


}


class DetailScreen extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home DetailScreen</Text>
        <Text>
          {/* getParam: f(paramName, defaultValue) */}
          {/* 获取props中传递的参数 */}
          ItemId: {this.props.route.params.itemId}
        </Text>
        <Button
          title="Go to home"
          onPress={() => {
            navigation.navigate('home')
          }}>

        </Button>
      </View>
    )
  }
}

// 定义导航 
// 参数： 路由配置对象 和 可选对象
// 返回： 一个react组件
// const StackNavigator = createStackNavigator({
//   // 路由配置对象,映射关系
//   Home: Homescreen,
//   Detail: DetailScreen
// },{
//   initialRouteName: 'Home'
// }) 


// 官网例子
const StackNavigator = createStackNavigator(
)

function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Home" component={Homescreen} />
        <StackNavigator.Screen name="detail" component={DetailScreen} /> 
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

// 函数 返回一个createAppContainer 创建的组件， 
//const App = NavigationContainer(StackNavigator)



export default App
