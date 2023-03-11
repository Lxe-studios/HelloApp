import React, {useState} from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './js/pages/Welcome';
import LoginScreen from './js/pages/auth/Login';
import RegistScreen from './js/pages/auth/Regist';

function HomeScreen({navigation}) {
  const {isLoading, setisLoading} = useState(false);
  const {userToken, setuserToken} = useState(null);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();

const myDrawer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="welcome" component={WelcomeScreen} />
        ) : userToken == null ? (
          <>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="redist" component={RegistScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={Home}
              option={{headerShown: false}}
            />
          </>
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default myDrawer;
