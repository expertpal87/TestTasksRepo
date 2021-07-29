//=----------- react ------// 
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

//=----------- navigation library ------// 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//=----------- screens ------// 

import HomeScreen from '../Home/index';
import Photos from '../Home/photos';
import RenderItem from '../Components/Render';

//=----------- stack ------// 
const Stack = createStackNavigator();

//=----------- main Component ------// 

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOption={{
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'All Photos',
          }}
        />
        <Stack.Screen
          name="Photos"
          component={Photos}
          options={{
            title: 'Photos',
            headerBackTitle: ' ',
            headerBackImage: () => (
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdB6C2TUki7U7WIz4_i57b5KyVJewec4MVVA&usqp=CAU' }}
                style={{ height: 25, width: 25, marginLeft: 10 }}
              />
            )
          }}
        />
        <Stack.Screen
          name="RenderItem"
          component={RenderItem}
          options={{
            title: 'RenderItem',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
