import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

// flexbox
// 容器属性： flexDirection
// row column(default value) row-reverse column-reverse

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: 'green'
  },
  powderblue: {
    width: 100,
    heigth: 100,
    backgroundColor: 'powderblue',
    
  },
  skyblue: {
    backgroundColor: 'skyblue',
    width: 100,
    heigth: 100,
  },
  steelblue: {
    backgroundColor: 'steelblue',
    width: 100,
    heigth: 100,
  }
})


class LostOfStyles extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} ></View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} ></View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} ></View>

      </View>
    )
  }
}

export default LostOfStyles

// import React from 'react'
// import { View, Image, Text, StyleSheet } from 'react-native'

// // flexbox
// // 容器属性： flexDirection
// // row column(default value) row-reverse column-reverse

// // justifyContent container--main axis(主轴) -- children align
// // flex-start
// // alignSelf overrides any option set by alignItems
// // flexWrap： container --main axis - [children overflow > container]

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     backgroundColor: 'green'
//   },
//   powderblue: {
//     width: 100,
//     heigth: 100,
//     backgroundColor: 'powderblue',
    
//   },
//   skyblue: {
//     backgroundColor: 'skyblue',
//     width: 100,
//     heigth: 100,
//   },
//   steelblue: {
//     backgroundColor: 'steelblue',
//     width: 100,
//     heigth: 100,
//   }
// })


// class LostOfStyles extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} ></View>
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} ></View>
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} ></View>

//       </View>
//     )
//   }
// }

// export default LostOfStyles
