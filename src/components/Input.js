import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

export default function Input({
  placeholder,
  secureTextEntry,
  onChangeText,
  multiline,
  value
}) {
  return (
    <View>
       <TextInput style={styles.input} placeholder={placeholder}
       secureTextEntry={secureTextEntry}
       onChangeText={onChangeText}
       multiline={multiline}
       value={value}
       /> 
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
      height:48,
      borderBottomWidth:1,
      borderBottomColor:'#ccc',
      marginBottom:25,
    }
  })