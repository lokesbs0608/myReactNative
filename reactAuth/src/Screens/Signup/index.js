import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButtton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput'
const Signup = () => {

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.header}>Sign In</Text>
      </View>
      <View style={{top:100,}}>
      <CustomInput placeholder="User Name"/>
      <CustomInput placeholder="Password"/>
      <CustomButtton lable="Sign up" 
      userNameValidation={"userName"}
      passwordValidation={"password"}
      />
      </View>
     
    </View>
  );
};

export default Signup;
