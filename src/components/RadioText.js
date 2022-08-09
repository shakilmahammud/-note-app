import { View, Text,StyleSheet,Pressable } from 'react-native'


export default function RadioText({text,selected,setValue}) {

    
  return (
    <Pressable style={styles.radionContainer} onPress={()=>setValue(text)}>
    <View style={[styles.outerCircle, selected && styles.selectedOuterCircle]}>
      <View style={[styles.innerCircle,selected && styles.selectedInnerCircle]}/>
    </View>
    <Text style={styles.radioText}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    radionContainer:{
     flexDirection:'row',
      alignItems:'center',
      marginBottom:20,
    },
    outerCircle:{
      height:30,
      width:30,
      borderRadius:15,
      borderWidth:1,
      borderColor:'#cfcfcf',
      marginRight:20, 
      justifyContent:'center',
      alignItems:'center',
    },
    innerCircle:{
        height:15,
        width:15,
        borderRadius:7.5,
        borderWidth:1,
        borderColor:'#cfcfcf',
    },
    // radioText:{
    //   height:48,
    //   borderBottomWidth:1,
    //   borderBottomColor:'#ccc',
    //   marginBottom:25,
    // },
    selectedOuterCircle:{
        borderColor:'orange',
    },
    selectedInnerCircle:{
        backgroundColor:'orange',
        borderColor:'orange',
    }

  })