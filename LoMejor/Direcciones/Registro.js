import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image} from 'react-native';
import Home from '../App'
 
class Registros extends Component{
    render (){
      
        return(
           <View  backgroundColor='#763281' style={{flex:1}} >
             <View style={{top:170}}>
             
             <TextInput 
          placeholder= 'Correo electronico @'
          placeholderTextColor='black' 
          textAlign='center'
          style={styles.TextInput}

          ></TextInput>
          <TextInput 
          placeholderTextColor="black"
          placeholder= 'Escriba su Nombre'
          textAlign='center'
          multiline={true}      >
          </TextInput>
          <TextInput 
           placeholderTextColor="black"
          placeholder= 'Escriba su Apellido'
          textAlign='center'
          multiline={true}      >
              </TextInput>

          <TextInput 
          placeholder= 'su contraseña'
          placeholderTextColor="black"
          textAlign='center'
          secureTextEntry={true}
          
          >
          </TextInput>
          <TextInput 
          placeholder= 'Repita su contraseña'
          placeholderTextColor="black"
          textAlign='center'
          secureTextEntry={true}
          >
          </TextInput>
         
          </View>

        
           </View>
        );
    }
}



const styles = StyleSheet.create({
  TextInput:{
    backgroundColor:'white',
    fontSize:30}
  });
  module.exports=Registros;