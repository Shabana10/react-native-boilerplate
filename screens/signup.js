import React, { useEffect, useState } from "react";
import {
  View, Text, TextInput, ScrollView, Image,
  TouchableOpacity, StyleSheet
} from "react-native";
import Card1 from '../assests/images/card1.jpg';
import { style } from "../styling/styling";
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { launchImageLibrary } from 'react-native-image-picker';
import { postData, getData } from "../config/redux/actions/useraction";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const styles = StyleSheet.create(style);

function Signup({ navigation }) {

  const [user_name, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [imguri, setImguri] = useState(Card1)
  const [isValidateUser, setIsValidateUser] = useState(false)
  const [isValidateEmail, setIsValidateEmail] = useState(false)
  const [isValidatePassword, setIsValidatePassword] = useState(false)
  const [avatarPic, setAvatar] = useState()
  const dispatch = useDispatch()

  const pickImgandUpload = () => {
    launchImageLibrary({ mediaType: 'photo', quality: 0.5 }, (fileobj) => {
      setImguri(fileobj.assets)
      setAvatar(JSON.stringify(fileobj.assets[0].fileName))
      console.log( 'avatar', avatarPic);
    })
  }
  const handleSubmit = async () => {
    // let emailReg = /\w+@\w+./;
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
      await fetch("http://10.0.2.2:8000/users",{
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
            navigation.navigate('Home')
            } catch (e) {
            console.log("Error hai", e);
          }
        })
        .catch(err =>{
          console.log(err.message);
        })
    }

  }
  return (
    <>
      <View style={[styles.container, styles.h_100]}>
        <TouchableOpacity
          onPress={() => pickImgandUpload()}
        >
          <Image
            source={imguri}
            style={{ width: 70, height: 70, borderRadius: 50 }} />
          <Text style={styles.txtDark}>
            Upload image
          </Text>
        </TouchableOpacity>
        <View>
          {/* Username */}
          <View>
            <Text style={[styles.txtDark]}>
              Username
            </Text>
            <View style={[styles.flexRow, styles.border_bottom,]}>
              <Icon name='person' size={30} color="orange" />
              <TextInput placeholder='Enter username' keyboardType='default'
                onChangeText={(e) => setUsername(e)} color='black' value={user_name}
                autoCapitalize={"words"} style={[styles.input, styles.txtDark]}
              />
            </View>
            {
              isValidateUser ?
                <Text style={[styles.txtDanger, styles.p]}>
                  Username should be 3-16 characters and shouldn't include any special character!</Text>
                : null
            }
          </View>
          {/* password */}
          <View>
            <Text style={[styles.txtDark]}>
              Password
            </Text>
            <View style={[styles.flexRow, styles.border_bottom,]}>
              <Icon name='lock' size={30} color="orange" />
              <TextInput placeholder='Enter Password'
                keyboardType='numeric' value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry={true}
                style={[styles.input, styles.txtDark]} color='black'
              />
            </View>
            {
              isValidatePassword ?
                <Text style={[styles.txtDanger, styles.p]}>
                  Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!
                </Text> :
                null
            }
          </View>
        </View>

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={[styles.btn1]}>
          <TouchableOpacity onPress={handleSubmit}>
            <Text style={[styles.txtCenter, styles.h4, styles.txtWhite]}>
              Signup
            </Text>
          </TouchableOpacity>
        </LinearGradient>

      </View>
    </>
  )
}

export default Signup