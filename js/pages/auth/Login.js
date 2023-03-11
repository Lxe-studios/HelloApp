import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function LoginScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('regist')}
          title="Regist"
        />
        <Button
          onPress={() => navigation.navigate('home')}
          title="Home"
        />
      </View>
    );
  }

 export default LoginScreen