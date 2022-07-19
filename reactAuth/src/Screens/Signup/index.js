import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButtton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput'
const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Signup</Text>
      </View>
      <CustomButtton lable="Signup" />
      <CustomInput/>
    </View>
  );
};

export default Signup;
