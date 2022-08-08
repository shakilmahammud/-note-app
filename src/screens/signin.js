import { View, Text,SafeAreaView,TextInput,StyleSheet,Pressable } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'

export default function SignIn({navigation}) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Text style={{fontSize:18,fontWeight:"bold",textAlign:'center'}}>Never Forgate Your Note</Text>
    <View style={{paddingHorizontal:16,paddingVertical:25}}>
    <Input placeholder="Email"/> 
    <Input placeholder="pasword" secureTextEntry/> 
    </View>
   
    
   <View style={{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:40,
    alignItems:'center',
    color:'#000'
   }}>
   <Button title={"Login"} customStyles={{alignSelf:'center',marginBottom:40}}/>
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

