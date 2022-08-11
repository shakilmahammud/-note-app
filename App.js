import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import SignIn from './src/screens/signin'
import Signup from './src/screens/signup'
import Edit from './src/screens/edit'
import Create from './src/screens/create'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './src/firebase/firebase'
import { Provider } from 'react-redux'
import {store} from './src/redux/store'

const Stack = createNativeStackNavigator();
const AppTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#fff",
  }
}

export default function App() {
  const [user,setUser] = useState(null);
  useEffect(()=>{
    const authActive = onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
      }else{
        setUser(false)
      }
    })
    return authActive;
  },[])
  return (
    <Provider store={store}>
    <NavigationContainer >

     <Stack.Navigator screenOptions={{headerShown:false}}>
   
     {user?(<>
      <Stack.Screen name="Home" > 
      {(props)=><Home {...props} user={user}/>}
      </Stack.Screen>
     <Stack.Screen name="Create">
     {(props)=><Create {...props} user={user}/>}
     </Stack.Screen>
     <Stack.Screen name="Edit" component={Edit} />
     </>):(<>
      <Stack.Screen name="Signin" component={SignIn} />
     <Stack.Screen name="Signup" component={Signup} /></>)}
     
     </Stack.Navigator>
  
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
