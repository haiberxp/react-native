import React,{Component} from 'react';
import { StyleSheet, Text, View,Button,TextInput,TouchableHighlight,Alert,Image,Dimensions} from 'react-native';

const {width:WIDTH}= Dimensions.get('window')

 class Login extends Component {
      
  render() {
   
  
    return (
      <View  backgroundColor='#562f5d' style={styles.fondo} >
          <Image source={require('../assets/parqui.jpg') } style={styles.logo} />
         <View >
        <TextInput
        style={{borderRadius:10,borderBottomWidth:1.5, borderBottomColor:'white',width:WIDTH, top:10, fontSize:20,
        textAlign:'center'}}
        placeholder='Usuario '
        placeholderTextColor='white'
        
        ></TextInput>
         <TextInput 
        style={{top:10,width:WIDTH,borderRadius:10,borderBottomWidth:1.5,  borderBottomColor:'white',fontSize:20,
       textAlign:'center'}}
        placeholder='Contraseña'
        placeholderTextColor='white'
        secureTextEntry={true}
        
        ></TextInput>
        <View style={{top:30}}>
       <TouchableHighlight
       style={styles.boton} 
       onPress={() => this.props.navigation.navigate('Ingres')
      }
       >
         <Text style={styles.botonm}
        
         >Login</Text>
       </TouchableHighlight>
       <TextInput 
        style={{height:5,width:WIDTH,borderBottomWidth:1.5,  borderBottomColor:'white',top:10}} 
        ></TextInput>
      <View style={{top:30}}>
        <TouchableHighlight 
      style={styles.boton2}
      onPress={() => this.props.navigation.navigate('Registro')
    }
      >
        <Text style={styles.texto1}>Registrarse</Text>

      </TouchableHighlight>
      <View style={{top:-39}}>
        <TouchableHighlight 
      style={styles.boton3}
      
      >
        <Text style={styles.texto1}
        >Invitado</Text>

      </TouchableHighlight>
      </View>
      </View>
       </View>
       
    

       
        </View>
        
    

      </View>
    );
  }
}
 
const styles=StyleSheet.create({
    boton:{
      alignSelf:'center',
  backgroundColor:'#4d0950',
  width: 330,
  height:40,
  borderRadius:25,
  
        borderWidth:1 
    },
    botonm:{
      textAlign:'center',
      color:'white',
      marginTop:5,
      fontSize:20,
      width: WIDTH -55
        
    },
    texto1:{
      color:'white',
      textAlign:'center',
      marginTop:5,
      fontSize:20
    },
    TextInput:{
      
      fontSize:30,
    
      
      
    },
    boton2:{
      marginLeft:40,
    backgroundColor:'#4d0950',
    width: 150,
    height:40,
    borderRadius:25,
    borderWidth:1  
        },
     boton3:{
      marginLeft:220,
      backgroundColor:'#4d0950',
      width: 150,
      height:40,
      borderRadius:25,
     borderWidth:1  },
     texto3:{
      color:'white'
    
    
    },
    fondo:{
      flex:1,
      justifyContent:'center',
      alignContent: 'center'
    },
    logo:{
      alignSelf:'center',
      width:300,
      height:300,
      top:-40
    },  texto2:{
      color:'white',
      
    }
        
    
  
  
  })
  
 

module.exports=Login;

