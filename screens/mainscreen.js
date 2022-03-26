import React, { useEffect, useState } from 'react';
import { style } from '../styling/styling';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../config/redux/actions/useraction';
import AsyncStorage from '@react-native-async-storage/async-storage';


const styles = StyleSheet.create(style)

export default function Mainscreen({ navigation, route }) {
  
  const userInfo = route.params;
  
    const handleLogout =async () =>{
      const res= await AsyncStorage.removeItem('token')
      .then(()=>{
        console.log('Logout');
        navigation.navigate('Login')
      }).catch((err)=>{
        console.log("async delete: ", err);
    })
    
  }
    const users = useSelector((state) => state)
    if(users){
    console.log('redux data',users);
    }else{
      console.log('data nhi h');
    }
    const dispatch = useDispatch()
    // useEffect(()=>{
    //   dispatch(getData())
    // },[])
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: 'black', fontSize: 32}}>
          Welcome {userInfo && userInfo.user_name}
        </Text>
      </View>
      <Text style={styles.text}>
        mainscreen 
      </Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
      <View>
      <Icon name="home" size={30} color="#900" />
      </View>
      <View>
      <Icon name="search" size={30} color="#900" />
      </View>
      <View>
      <Icon name="login" size={30} color="#900" />
      </View>
      <View>
      <Icon name="favorite" size={30} color="#900" />
      </View>
      <View>
      <Icon name="comment" size={30} color="#900" />
      </View>
      <View>
      <Icon name="check" size={30} color="#900" />
      </View>
      <View>
      <Icon name="person-add" size={30} color="#900" />
      </View>
      <View>
      <Icon name="person" size={30} color="#900" />
      </View>
      <View>
      <Icon name="list" size={30} color="#900" />
      </View>
      <View>
      <Icon name="menu" size={30} color="#900" />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  )
}
