import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input'
import RadioText from '../components/RadioText'
import {db} from '../firebase/firebase'
import {addDoc,collection} from 'firebase/firestore'
import Button from '../components/Button'

const colorOption = ['red','blue','green']
export default function Create({navigation,route,user}) {
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [noteColor,setNoteColor] = useState('blue');

  const createNote = async () =>{
   const noteCreate = await addDoc(collection(db,'notes'),{
    title:title,
    description:description,
    color: noteColor,
    uid:user.uid,
   })
   navigation.goBack();
  }
  return (
    <SafeAreaView style={{marginHorizontal:20,flex:1}}>
   <Input placeholder="Title" onChangeText={(text)=>setTitle(text)}/> 
    <Input placeholder="Description" multiline={true}  onChangeText={(text)=>setDescription(text)}/> 
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
   onPress={createNote}
   />
    </SafeAreaView>
  )
}