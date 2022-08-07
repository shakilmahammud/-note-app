import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home'
import SignIn from './src/screens/signin'
import Signup from './src/screens/signup'
import Edit from './src/screens/edit'
import Create from './src/screens/create'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} />
     <Stack.Screen name="Signin" component={SignIn} />
     <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="Create" component={Create} />
     <Stack.Screen name="Edit" component={Edit} />
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
