import { View, Text,SafeAreaView,TextInput,StyleSheet,Pressable } from 'react-native'
import React,{useState} from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import RadioText from '../components/RadioText'
import '../firebase/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const auth = getAuth();
export default function SignUp() {

  const options =['male','female']
  const [gender,setGender] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [age,setAge] = useState('');
  const [name,setName] = useState('');

  const signup= ()=>{
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <Text style={{fontSize:18,fontWeight:"bold",textAlign:'center'}}>Never Forgate Your Note</Text>
    <View style={{paddingHorizontal:16,paddingVertical:25}}>
    <Input  placeholder="Email" onChangeText={(text)=>setEmail(text)}/> 
    <Input  placeholder="pasword" secureTextEntry onChangeText={(text)=>setPassword(text)}/> 
    <Input  placeholder="Full Name" onChangeText={(text)=>setAge(text)}/> 
    <Input  placeholder="Age" onChangeText={(text)=>setName(text)}/> 
    </View>
    {options.map((option,i)=>{
      const selected = gender==option;
      return(
        <RadioText 
        text={option}
         key={i} 
         setGender={setGender} 
         selected={selected}/>
      )
    })}
   <View style={{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:40,
    alignItems:'center',
    color:'#000'
   }}>
   <Button title={"SignUp"} customStyles={{alignSelf:'center',marginBottom:40}}
   onPress={signup}
   />
   <Pressable >
   <Text>
     Alredy have an accout?{' '}
     <Text style={{
      color:'green',fontWeight:'bold',
     }}>Login</Text>
     </Text>
    </Pressable>
    </View>
    </SafeAreaView>
  )
}

