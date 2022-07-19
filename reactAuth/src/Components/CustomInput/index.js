import { View, TextInput  } from 'react-native';
import React, { useState } from 'react'

const CustomInput = ({placeholder}) => {
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')


  return (
    <View>
      <View style={{backgroundColor: 'white',alignItems:'center', alignSelf:'center',width: '70%', margin:5,borderRadius:15}}>
        <TextInput onChangeText={(e)=>  placeholder=="Password"?setPassword(e):setUserName(e)} style={{color:'steelblue'}} placeholder={placeholder}></TextInput>
        </View>
     
    </View>
  )
}

export default CustomInput