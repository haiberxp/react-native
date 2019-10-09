import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image,Navigator} from 'react-native';
import { createAppContainer,NavigationAction, NavigationEvents } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Registros from './Direcciones/Registro';
import Login from './Direcciones/Login'


 class Home extends Component {
  presion2(){
    Alert.alert (
        'Registros',
        'si se quiere registrar de le ok',
        [
          {text: 'Cancelar'},
          { text:'ok' } 

        ],
                
      );
    }
  render() {
    const {navigation} =this.props;
   
    return (
      <View  backgroundColor='#562f5d' style={{flex:1}} >
          <Image source={require('./assets/parqui.jpg')}
          style={{marginLeft:80,top:40}} />
         <View style={{top:120}}>
        <TextInput
        style={styles.TextInput}
      
        placeholder='         Usuario'
        placeholderTextColor='white'
        style={{width:200}}
        ></TextInput>
         <TextInput 
        style={{top:5,width:200}} 
        
        borderEndColor='white'
        placeholder='         Contraseña'
        placeholderTextColor='white'
        
        secureTextEntry={true}
        ></TextInput>
        <View style={{top:30}}>
       <TouchableHighlight
       style={styles.boton}
       
       onPress={() => navigation.navigate('Logins')}
       
       >
         <Text style={styles.botonm}>Login</Text>
       </TouchableHighlight>
       <Text style={styles.texto2} style={{top:15}}>---------------------------------------------------ó------------------------------------------------------</Text>
      <View style={{top:15}}>
        <TouchableHighlight 
      style={styles.boton2}
      onPress={() => navigation.navigate('Registro')}
      >
        <Text style={styles.texto1}>Registrarse</Text>

      </TouchableHighlight>
      <View style={{top:-39}}>
        <TouchableHighlight 
      style={styles.boton3}
      >
        <Text style={styles.texto1}>Invitado</Text>

      </TouchableHighlight>
      </View>
      </View>
       </View>
       
    

       
        </View>
        
    

      </View>
    );
  }
}
 
class Direccion extends React.Component{
  render(){
    
    return( 
      <Registros>

      </Registros>
    );
  }
}
 
class DireccionLogin extends React.Component{
  render(){
    
    return( 
      <Login>

      </Login>
    );
  }
}
 



const App = createStackNavigator({   
  Home: Home,   
  Registro: Direccion,
  Logins: DireccionLogin
 },
  {
  initialRouteName: 'Home',
}
 );

export default createAppContainer (App) ;
const styles=StyleSheet.create({
  boton:{
  marginLeft:35,
backgroundColor:'#4d0950',
width: 330,
height:40,
borderRadius:15,

      borderWidth:1 
  },
  botonm:{
    textAlign:'center',
    color:'white',
    marginTop:5,
    fontSize:15
      
  },
  texto1:{
    color:'white',
    textAlign:'center',
    marginTop:10,
    fontSize:15
  },
  TextInput:{
    backgroundColor:'white',
    fontSize:30
  },
  boton2:{
    marginLeft:35,
  backgroundColor:'#4d0950',
  width: 150,
  height:40,
  borderRadius:15,
        borderWidth:1  
      },
   boton3:{
    marginLeft:210,
    backgroundColor:'#4d0950',
    width: 150,
    height:40,
    borderRadius:15,
   borderWidth:1  },
   texto3:{
    color:'white'
  
  
  }
      
  


})

