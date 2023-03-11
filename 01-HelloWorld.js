/**
 * 
 * 1. RN 默认支持ES...  babel配置好了
 * 2. JSX 代码中嵌入 标记语言（类似html） + 组件
 *      多数框架语法：标记语言中嵌入代码
 * 3. build-in 内置组件 View Text
 * 
 */


/**
 * 
 *  Props
 *  1 组件属性： 不同参数定制的组件（parameters），传递参数通过 组件属性
 * 
 * 2.<Image>组件 属性：source， 参数就是图片的地址
 *      <Image source={pic} style={{}} />
 * 
 */



import React from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';


// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {

    const pic =  'https://cn.bing.com/images/search?view=detailV2&ccid=bbpWB8GH&id=C8BB7811431F8E59D2608B2CEAFCFB59A7B678F6&thid=OIP.bbpWB8GHdTWVUtFDCuGyNAHaGj&mediaurl=https%3a%2f%2fattachment.i-bei.com%2fforum%2f201810%2f08%2f1744317ttfgtg477z74s4t.jpg&exph=880&expw=994&q=haimian+baobao+&simid=607990412573168854&FORM=IRPRST&ck=FD40C89FE5C5F789A020B9A34541FC9A&selectedIndex=4&ajaxhist=0&ajaxserp=0'

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Hello World</Text>
        <Image source = {{uri: pic}} style = {{width: 200, heigth: 200}} />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;