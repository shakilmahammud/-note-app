import { View, Text,Pressable,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {signOut} from 'firebase/auth'
import Button from '../components/Button'
import { AntDesign } from '@expo/vector-icons';
import {auth,db} from '../firebase/firebase'
import {collection,onSnapshot,query,where,deleteDoc,doc} from 'firebase/firestore'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,selectCount } from '../redux/counterSlice'
import { toggleTheme,selectTheme } from '../redux/themeSlice'

export default function Home({navigation,route,user}) {
  const [note,setNote] = useState([]);
  const count = useSelector(selectCount)
  const mode = useSelector(selectTheme)
  const dispatch = useDispatch()

  const bgColor = mode == 'light'?'white':'black';
  const textColor = mode == 'light'? 'black' : 'white';
  useEffect(()=>{
    const noteQuery = query(collection(db,'notes'),where('uid','==',user.uid))
    const noteGet = onSnapshot(noteQuery,(notes)=>{
      const noteList =[];
      notes.forEach(element => {
        noteList.push({...element.data(),id:element.id})
      });
      setNote(noteList)
    })
    return noteGet;
  },[])
  console.log(note)
  const logout =()=>{
    signOut(auth);
  }
  const create = () =>{
    navigation.navigate('Create')
  }
  const renderItem = ({item}) =>{
    const {title,description,color} =item;
  return (
    <Pressable onPress={()=>navigation.navigate('Edit',{item})}
    style={{
      backgroundColor:color,
      marginBottom:20,
      padding:15,
      borderRadius:16}}>
      <Pressable 
      style={{position:'absolute',alignSelf:'flex-end',padding:20,zIndex:99}}
      onPress={()=>deleteDoc(doc(db,'notes',item.id))}
      >
      <AntDesign name="delete" size={24} color={textColor} />
      </Pressable>
    <Text style={{color:textColor,fontSize:24}}>{title}</Text>
    <Text style={{color:textColor,fontSize:14,marginTop:8}}>{description}</Text>
    </Pressable>
  )
  }
  return (
    <SafeAreaView style={{backgroundColor:bgColor}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:20}}>
      <Text style={{color:textColor}}>My Notes {count} </Text>
      <Pressable onPress={create}>
      <AntDesign name="pluscircleo" size={24} color={textColor} />
      </Pressable>
    </View>
    <View >
      <Text style={{color:textColor}}>home</Text>
      <Button title={"logout"} customStyles={{alignSelf:'center',marginBottom:40}}
       onPress={logout}
   />
    </View>
    <Pressable onPress={() => dispatch(increment())} ><Text style={{color:textColor}}>InCrement</Text></Pressable>
    <Pressable onPress={() => dispatch(decrement())} ><Text style={{color:textColor}}>DeCrement</Text></Pressable>
    <Pressable onPress={() => dispatch(toggleTheme('dark'))}><Text style={{color:textColor}}>dark theme</Text></Pressable>
    <Pressable onPress={() => dispatch(toggleTheme('light'))}><Text style={{color:textColor}}>light theme</Text></Pressable>
    
    <View >
      <FlatList data={note} renderItem={renderItem} 
      keyExtractor={(item)=>item.title}
      ></FlatList>
    </View>
    </SafeAreaView>
  )
}