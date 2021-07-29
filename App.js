//=----------- react ------// 
import React from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

//=----------- navigation component ------// 

import Navigation from './src/Navigation';

//=----------- main Component ------// 

const App = () => {
 
  //=----------- Views ------// 
  
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <Navigation
          />
      </View>
   </SafeAreaView>
  );
};

export default App;
