import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase/firebase'
import Button from '../components/Button'

export default function Home() {
  const logout =()=>{
    signOut(auth);
  }
  return (
    <SafeAreaView>
    <View>
      <Text>home</Text>
      <Button title={"logout"} customStyles={{alignSelf:'center',marginBottom:40}}
       onPress={logout}
   />
    </View>
    </SafeAreaView>
  )
}