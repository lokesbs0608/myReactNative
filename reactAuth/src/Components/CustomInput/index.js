import { View, TextInput  } from 'react-native';
import React from 'react'

const CustomInput = () => {
  return (
    <View>
      <View style={{backgroundColor: 'white', width: '50%', padding: 10}}>
        <TextInput placeholder="Enter your mail id"></TextInput>
        </View>
     
    </View>
  )
}

export default CustomInput