import {View, TouchableOpacity, Text} from 'react-native';
import React, { useEffect } from 'react';

const CustomButtton = ({lable}) => {
  const handlevalidation=()=>{
    alert("hello")
  }

   
  return (
    <View>
      <TouchableOpacity onPress={handlevalidation} >
        <View
          style={{
            borderWidth: 1,
            height:50,
            width:"35%",  
            backgroundColor: 'skyblue',
            borderColor: 'powderblue',
            borderRadius:10,
            alignSelf: 'center',
            justifyContent:'center',
            alignItems: 'center',
          }}>
          <Text style={{color:'steelblue'}}>{lable}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtton;
