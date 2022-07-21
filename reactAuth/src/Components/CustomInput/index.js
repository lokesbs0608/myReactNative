import { View, TextInput  } from 'react-native';
import React, { useState } from 'react'

const CustomInput = ({placeholder,type}) => {
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')


  return (
    <View>
      <View style={{backgroundColor: 'white',alignItems:'center',justifyContent:'center', alignSelf:'center',width: '70%', margin:5,borderRadius:10,height:45}}>
        <TextInput keyboardType={type}   onChangeText={(e)=>  placeholder=="Password"?setPassword(e):setUserName(e)} style={{color:'steelblue'}} placeholder={placeholder}></TextInput>
        </View>
     
    </View>
  )
}

export default CustomInput