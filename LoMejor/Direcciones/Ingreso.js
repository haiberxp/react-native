import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image,Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Registro from './Registro';
import Login from './Login'


class Ingres extends Component{
    render(){
        return(        
            <View>
                <Text>gg</Text>
            </View>
        );
    }
}
const Ventana = createDrawerNavigator ({
    Cuenta: Ingres,
    Registrarse: {screen:Registro, navigationOptions:{
        drawerLockMode:'locked-closed'
    }},
    Cerrar_Sesion: {screen:Login, navigationOptions:{
        drawerLockMode:'locked-closed'
    }},
    
   });
   const App2  = createAppContainer(Ventana);

module.exports=App2;

