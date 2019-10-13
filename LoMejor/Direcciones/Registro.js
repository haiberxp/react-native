import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image,Dimensions} from 'react-native';
import imagen from '../assets/parqui.jpg';




const {width:WIDTH}= Dimensions.get('window')
class Registros extends Component{ 

   presion1=()=> {
      Alert.alert(
         'Formulario',
        'Bien ya esta registrado',
        
        [
          {
            text:'Cancelar'
          
          },
          {
            text:'ok', onPress: ()=> this.props.navigation.navigate('Home') }
        ],

      );
    }
    render (){
    
        return(
           <View  backgroundColor='#763281' style={{flex:1}} >

           
             <View style={{top:50}}>
                          <Image source={imagen} style={{alignSelf:'center', height:270}}></Image>
             <TextInput 
         style={{borderBottomWidth:1.5, borderBottomColor:'white',width:300, top:10, fontSize:20,borderRadius:5,borderBottomWidth:1.0,
         textAlign:'center',marginLeft:60}} 
          placeholder= 'Correo electronico @'
          placeholderTextColor='white' 
          textAlign='center'
          
          

          ></TextInput>
          <TextInput 
          style={{borderBottomWidth:1.5, borderBottomColor:'white',width:300, top:10, fontSize:20,borderRadius:5,borderBottomWidth:1.0,
          textAlign:'center',marginLeft:60}} 
          placeholderTextColor="white"
          placeholder= 'Escriba su Nombre'
          multiline={true}      >
          </TextInput>
          <TextInput 
           placeholderTextColor="white"
          placeholder= 'Escriba su Apellido'
           multiline={true}   
           style={{borderBottomWidth:1.5, borderBottomColor:'white',width:300, top:10, fontSize:20,borderRadius:5,borderBottomWidth:1.0,
          textAlign:'center',marginLeft:60}}  >
              </TextInput>

          <TextInput 
          s style={{borderBottomWidth:1.5, borderBottomColor:'white',width:300, top:10, fontSize:20,borderRadius:5,borderBottomWidth:1.5,
          textAlign:'center',marginLeft:60}} 
          placeholder= 'su contraseña'
          placeholderTextColor="white"
          textAlign='center'
          secureTextEntry={true}
          
          >
          </TextInput>
          <TextInput 
           style={{borderRadius:5,borderBottomWidth:1.5, borderBottomColor:'white', width:300, fontSize:20,marginLeft:60, textAlign:'center',top:10}} 
          placeholder= 'Repita su contraseña'
          placeholderTextColor="white"
          secureTextEntry={true}
          >
          </TextInput>
          <TextInput 
        style={{height:5,width:WIDTH,borderBottomWidth:1.5,  borderBottomColor:'white',top:30}} 
        ></TextInput>
        <TouchableHighlight style={styles.boton} >
           <Text style={{fontSize:20,color:'white',alignSelf:'center',top:5}}
           onPress={this.presion1}>Registrarse</Text>
           </TouchableHighlight>
           <TouchableHighlight style={styles.boton2} >
           <Text style={{fontSize:20,color:'white',alignSelf:'center',top:5}}
           onPress={()=> this.props.navigation.navigate('Home') }>Cancelar</Text>
           </TouchableHighlight>
        
          </View>
         
           </View>
        );
    }
}

const styles=StyleSheet.create({
boton:{
top:80,
marginLeft:230,
backgroundColor:'#4d0950',
width: 150,
height:40,
borderRadius:25,

},
boton2:{
  top:40,
  marginLeft:40,
  backgroundColor:'#4d0950',
  width: 150,
  height:40,
  borderRadius:25,
  
  },
  botonm:{
    textAlign:'center',
    color:'white',
    marginTop:5,
    fontSize:20,
    width: WIDTH -55
  }
 })


 



module.exports=Registros;