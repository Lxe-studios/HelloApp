import React, {useState} from 'react';
import {Button, View} from 'react-native';

import FetchDemo from './js/pages/main/FetchDemo';

// AsyncStorage 是LocalStorage 替代方案
// 简单 异步 持久化 key-value 存储系统 App全局


function App({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FetchDemo />
    </View>
  );
}

export default App;
