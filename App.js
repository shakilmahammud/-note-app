import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import SignIn from './src/screens/signin'
import Signup from './src/screens/signup'
import Edit from './src/screens/edit'
import Create from './src/screens/create'



const Stack = createNativeStackNavigator();
const AppTheme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"#fff",
  }
}
export default function App() {
  const user = false;
  return (
    
    <NavigationContainer >

     <Stack.Navigator screenOptions={{headerShown:false}}>
   
     {user?(<>
      <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Create" component={Create} />
     <Stack.Screen name="Edit" component={Edit} />
     </>):(<>
      <Stack.Screen name="Signin" component={SignIn} />
     <Stack.Screen name="Signup" component={Signup} /></>)}
     
     </Stack.Navigator>
  
    </NavigationContainer>
    
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
