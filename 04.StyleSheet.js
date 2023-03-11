import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

// 1. 所有组件 都有style 属性接受样式
// 2. 可以定义多个样式在一起，简洁管理 StyleSheet.create()
// 注意多个样式覆盖问题（后面覆盖前面）

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  blue: {
    color: 'blue'
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  }
})


class LostOfStyles extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style= {styles.blue}>just big blue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigblu and red</Text>
        <Text>just red</Text>
      </View>
    )
  }
}

export default LostOfStyles


// import React from 'react'
// import { View, Image, Text, StyleSheet } from 'react-native'

// // 1. 所有组件 都有style 属性接受样式
// // 2. 可以定义多个样式在一起，简洁管理 StyleSheet.create()
// // 注意多个样式覆盖问题（后面覆盖前面）

// // RN 尺寸是没有单位的 == 代表独立像素
// // android 设备 高度宽度 单位解析成dp 字体解析成sp 
// // ios 设备 高度和宽度 解析成 pt单位

// const styles = StyleSheet.create({
//   powderblue: {
//     width: 100,
//     heigth: 100,
//     backgroundColor: 'powderblue',
    
//   },
//   skyblue: {
//     backgroundColor: 'skyblue',
//   },
//   steelblue: {
//     backgroundColor: 'steelblue',
//   }
// })


// class LostOfStyles extends React.Component {
//   render() {
//     return (
//       <View>
//         <View style={styles.powderblue} />
//       </View>
//     )
//   }
// }

// export default LostOfStyles