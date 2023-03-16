import React, {useState} from 'react';
import {Button, View, TextInput, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

function FetchDemo({navigation}) {
  let [searchContent, setsearchContent] = useState('');

  function loadData() {
    setsearchContent(() => (searchContent = encodeURI(searchContent)));
    let city = encodeURI(searchContent);
    console.log('====================================');
    console.log(city);
    console.log('====================================');
    let url = 'http://v.juhe.cn/weather/index';

    fetch(url, {
      method: 'post',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        a: 'ss',
      }),
    })
      .then(response => response.text())
      .then(responseText => {
        data: responseText;
      });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={searchContent}
        style={styles.input}
        defaultValue='""'
        onChangeText={text => {
          setsearchContent((searchContent = text));
        }}
      />
      <Button onPress={() => loadData()} title="Get city" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    heigth: 500,
    width: 300,
    borderColor: 'black',
    borderRadius: 0.5,
    borderWidth: 1,
    margin: 10,
  },
});

export default FetchDemo;
