import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom1Screen from '../pages/main/Main1';
import Bottom2Screen from '../pages/main/Main2';
import { Icon } from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="BottomTab1" 
        component={Bottom1Screen} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <Icon name='android' color={color} size={size}></Icon>
            )
        }}
      />
      <Tab.Screen 
        name="BottomTab2" 
        component={Bottom2Screen} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <Icon name='android' color={color} size={size}></Icon>
            )
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
