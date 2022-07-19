import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const CustomButtton = ({lable}) => {
    console.log(lable);
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            backgroundColor: 'skyblue',
            borderColor: 'powder-blue',
            width: '50%',

            alignSelf: 'center',
            alignItems: 'center',
          }}>
          {<Text>{lable}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButtton;
