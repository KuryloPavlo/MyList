import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src';

class App extends React.PureComponent{
  render(){
    return(
      <NavigationContainer>
        <Navigator/>
      </NavigationContainer>
    )
  }
}

export default App;