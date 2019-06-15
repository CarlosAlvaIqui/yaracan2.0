import {
    AppRegistry,
    StyleSheet,
    Text,Image,
    View, 
    TouchableOpacity,
  } from 'react-native';
  import React, { Component } from 'react';
  import { NavigationBar } from 'navigationbar-react-native';
   
  const ComponentLeft = () => {
    return(
      <View style={{ flex: 1, alignItems: 'flex-start'}} >
         <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
          <Image 
            source={require('../../assets/img/log_1.png')}
            style={{ resizeMode: 'contain', width: 20, height: 20, alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', }}>Back Home</Text>
        </TouchableOpacity>
      </View>
    );
  };
   
  const ComponentCenter = () => {
    return(
      <View style={{ flex: 1, }}>
         <Image
          source={require('../../assets/img/log_2.jpg')}
          style={{resizeMode: 'contain', width: 200, height: 35, alignSelf: 'center' }}
        />
      </View>
    );
  };
   
  const ComponentRight = () => {
    return(
      <View style={{ flex: 1, alignItems: 'flex-end', }}>
        <TouchableOpacity>
          <Text style={{ color: 'white', }}> Right </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const ComponentRights = () => {
    return(
      <View style={{ flex: 1}}>
        <TouchableOpacity>
          <Text style={{ color: 'white', }}> Right1 </Text>
        </TouchableOpacity>
      </View>
    );
  };
   
  class Appxd extends React.Component {
    render() {
      return (
        <View>
          <NavigationBar 
            componentLeft     = { () =>  <ComponentLeft />   }
            componentCenter   = { () =>  <ComponentCenter /> }
            componentRight    = { () =>  <ComponentRight />  }
            ComponentRights    = { () =>  <ComponentRights />  }
            navigationBarStyle= {{ backgroundColor: '#215e79' }}
            statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
          />
        </View>
      );
    }
  }
  export default Appxd;