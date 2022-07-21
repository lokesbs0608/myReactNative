import {Text, View,useWindowDimensions, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButtton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput'

const Signup = () => {
  

  return (
    <SafeAreaView>
    <View style={[styles.container,{}]}>
      <View>
        <Text style={{color:'steelblue',fontSize:18,fontFamily:'futura',padding:10,fontWeight:'bold'}}>Video stream</Text>
      </View>
      <View style={{flex:.5,justifyContent:'center'}} >
      <View style={{alignItems: 'center'}}>
      </View>
      <View style={{justifyContent:'center'}}>
      <CustomInput placeholder="Enter User Email" />
      <CustomInput placeholder="Enter Password"/>
      <CustomInput placeholder="Enter your Number" type="number-pad" />
      <CustomInput placeholder="Enter your Name" />
     
       <View style={{flexDirection:'row',justifyContent:'space-evenly',}}>
       
       <CustomButtton lable="Sign up" 
      userNameValidation={"userName"}
      passwordValidation={"password"}

      />
      <CustomButtton lable="Login" 
      userNameValidation={"userName"}
      passwordValidation={"password"}
     
      />
       </View>
       
      </View>
      </View>  
    </View>
    </SafeAreaView>
  );
};

export default Signup;
