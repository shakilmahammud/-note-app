import { View, Text,TextInput,StyleSheet,Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React,{useState} from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase/firebase'
export default function SignIn({navigation}) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const login =()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(userCredential)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <Text style={{fontSize:18,fontWeight:"bold",textAlign:'center'}}>Never Forgate Your Note</Text>
    <View style={{paddingHorizontal:16,paddingVertical:25}}>
    <Input placeholder="Email" onChangeText={(text)=>setEmail(text)}/> 
    <Input placeholder="pasword" secureTextEntry onChangeText={(text)=>setPassword(text)}/> 
    </View>
   
    
   <View style={{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:40,
    alignItems:'center',
    color:'#000'
   }}>
   <Button title={"Login"} customStyles={{alignSelf:'center',marginBottom:40}} 
   onPress={login}/>
   <Pressable onPress={()=>
   navigation.navigate('Signup')
   }>
   <Text>
     Don't have an accout?{' '}
     <Text style={{
      color:'green',fontWeight:'bold',
     }}>SignUp</Text>
     </Text>
    </Pressable>
    </View>
    </SafeAreaView>
  )
}

