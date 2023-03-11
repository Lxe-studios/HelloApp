import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => navigation.navigate('flatlist')}
        title="Go to flatlist"
      />
    </View>
  );
}

function FlatListScreen({ navigation }) {
  const [isFreshing,setisFreshing] = React.useState(false)
  const [data,setData] = React.useState(PROVINCE_NAMES)

  const _renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemtext}>{item.province}</Text>
      </View>
    )
  }

  const _loadFreshData = () => {
    // 开启刷新标记
    setisFreshing(true)
    // 请求网络数据
    setTimeout(() => {
      // 模拟网络数据
      let dataArray = [{ key: 1, province: 'hunan' }, { key: 2, province: '广东' }, { key: 3, province: '浙江' }, { key: 4, province: '江苏' }, { key: 5, province: '上海' }, { key: 6, province: '福建' }, { key: 7, province: '江西' }]
      setData((data) => [...dataArray,...data])
      setisFreshing(false)
    },1000)
    // 设置本地state
    // flatlist data 和本地组件state 数据进行绑定，同步刷新
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={
          // renderItem 表达式里面 函数参数 是一个对象，解构才能获取
          ({ item }) => <_renderItem item={item}></_renderItem>
        }
        refreshing = {isFreshing}
        onRefresh={() => {
          _loadFreshData()
        }}
      />
    </View>
  );
}

const PROVINCE_NAMES = [{ key: 1, province: '湖北' }, { key: 2, province: '广东' }, { key: 3, province: '浙江' }, { key: 4, province: '江苏' }, { key: 5, province: '上海' }, { key: 6, province: '福建' }, { key: 7, province: '江西' }]


const StackNavigator = createStackNavigator(
)

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator initialRouteName="Home">
        <StackNavigator.Screen name="Home" component={HomeScreen} />
        <StackNavigator.Screen name="flatlist" component={FlatListScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,

    },
    item: {
      height: 200,
      margin: 15,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f5fcff',

    },
    itemtext: {
      fontSize: 20,
      color: 'black'
    }
  }
)