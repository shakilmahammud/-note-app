import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input'
import RadioText from '../components/RadioText'
import {db} from '../firebase/firebase'
import {updateDoc,doc} from 'firebase/firestore'
import Button from '../components/Button'

const colorOption = ['red','blue','green']
export default function Edit({navigation,route}) {
  const noteItem = route.params.item;
  const [title,setTitle] = useState(noteItem.title);
  const [description,setDescription] = useState(noteItem.description);
  const [noteColor,setNoteColor] = useState(noteItem.color);

  const updateNote = async () =>{
    const noteRef =doc(db,'notes',noteItem.id);
   const noteUpdate = await updateDoc(noteRef,{
    title:title,
    description:description,
    color: noteColor,
   })
   navigation.goBack();
  }
  return (
    <SafeAreaView style={{marginHorizontal:20,flex:1}}>
   <Input placeholder="Title"
    onChangeText={ (text)=>setTitle(text)} 
    value={title}/> 
    <Input placeholder="Description" multiline={true}  
    onChangeText={(text)=>setDescription(text)}
    value={description}
    /> 
    {colorOption.map((color,i)=>{
      const selected = noteColor==color;
      return(
        <RadioText 
        text={color}
         key={i} 
         setValue={setNoteColor} 
         selected={selected}
         />
      )
    })}
    <Button title={"Submit"} customStyles={{alignSelf:'center',marginBottom:40,width:'100%'}}
   onPress={updateNote}
   />
    </SafeAreaView>
  )
}