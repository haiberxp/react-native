import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image,Navigator,Dimensions} from 'react-native';
import { createAppContainer,NavigationAction, NavigationEvents } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Registros from './Direcciones/Registro';
import Login from './Direcciones/Login';
import Ingresos from './Direcciones/Ingreso';




const App = createStackNavigator({   
  Home:Login,
  Registro: Registros,
  Ingres: Ingresos,
 },
  {
 
  initialRouteName: 'Home',
  headerMode: 'none',
  

}
 );

export default createAppContainer (App) ;

