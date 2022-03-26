import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, 
  TextInput, Alert } from 'react-native'
import { style } from '../styling/styling'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create(style)
export default function Login({ navigation, route }) {
  
  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const getSignin= async () =>{
    let emailReg = /\w+@\w+./;
    if (user_name.trim().length <= 3) {
      setIsValidateUser(true)
      setTimeout(() => {
        setIsValidateUser(false)
      }, 3000)
    } else if (password.trim().length < 8) {
      setIsValidatePassword(true)
      setTimeout(() => {
        setIsValidatePassword(false)
      }, 3000)
    }
    else {
      const obj = {
        user_name,
        password
      }
      console.log(obj);
      await fetch("http://10.0.2.2:8000/users/signin",{
     "method": "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(obj)
      })
      .then(res=>res.json())
        .then((data) => {
          try {
             AsyncStorage.setItem('token', data.token)
            console.log(data);
            AsyncStorage.setItem('token', data.token)
            navigation.navigate('Home', obj)
            } catch (e) {
            console.log("Error hai", e);
            Alert(e)
          }
        })
        .catch(err =>{
          console.log(err.message);
        })
    }
  }
  const handleSignup =()=>{
    navigation.navigate('Signup')
  }
  return (
    <View style={[styles.container_fluid, styles.h_100,]}>
      <Text style={styles.txtDark}>
        login
      </Text>
      <View style={[styles.w_75, styles.p_1]}>
        <TextInput placeholder='Enter Username' style={[style.input, styles.border_bottom, 
          styles.w_100, styles.bg_lightgrey, styles.m_1]} 
          onChangeText={(e) => setUsername(e)} />
      </View>
      <View style={[styles.w_75, styles.p_1]}>
        <TextInput placeholder='Enter Passwrd' style={[style.input, styles.border_bottom, 
          styles.w_100, styles.bg_lightgrey, styles.m_1]} onChangeText={(e) => setPassword(e)} />
      </View>
      <TouchableOpacity
        onPress={getSignin} style={[styles.btn1, styles.justifyCenter, styles.alignItem, styles.bg_dark]}>
        <Text style={[styles.txtWhite, styles.h4,]}>
          sigin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity  style={[styles.btn1, styles.justifyCenter, styles.alignItem, styles.bg_dark]}
        onPress={handleSignup}>
        <Text style={[styles.txtWhite, styles.h4,]}>
          create an account
        </Text>
      </TouchableOpacity>
    </View>
  )
}
