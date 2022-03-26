import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { style } from '../styling/styling'
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create(style)
function Inputs() {

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')
    const [country, setCountry] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputArr = [
        {
            title: 'First Name',
            placeholder: 'Enter First Name',
            keyboardtype: 'default',
            value: firstName,
            onchangetext: (e) => setFirstname(e),
            name:'person',
        },  
        {
            title: 'Last Name',
            placeholder: 'Enter Last Name',
            keyboardtype: 'default',
            value: lastName,
            onchangetext: () => setLastname(e),
            name:'person',
        },
        {
            title: 'Country',
            placeholder: 'Entry country name',
            keyboardtype: 'default',
            value: country,
            onchangetext: (e) => setCountry(e),
            name:'person',
        },
        {
            title: 'Contact',
            placeholder: 'Entry contact number',
            keyboardtype: 'numeric',
            value: contact,
            onchangetext: (e) => setContact(e),
            name:'person',
        },
        {
            title: 'Email',
            placeholder: 'Entry Email',
            keyboardtype: 'email-address',
            value: email,
            onchangetext: (e) => setEmail(e),
            name:'person',
        },
        {
            title: 'Password',
            placeholder: 'Enter Password',
            keyboardtype: 'numeric',
            value: password,
            onchangetext: (e) => setPassword(e),
            secureTextEntry: true,  
            name:'person'
        },
    ]
    return (
        <View style={[styles.container, styles.h_100]}>
            {
                inputArr.map((e, i) => {
                    return <View key={i}>
                        <Text style={[styles.txtDark, styles.lineh_2]}>
                            {e.title}
                        </Text>
                        <View style={[styles.flexRow, styles.border_4, styles.p_1]}>
                            <Icon name={e.name} size={30} color="grey" />

                            <TextInput placeholder={e.placeholder} keyboardType={e.keyboardtype}
                                onchangetext={e.onchangetext} secureTextEntry={e.secureTextEntry}
                                style={[styles.input, styles.txtDark]} color='black'
                            />
                        </View>
                    </View>
                })
            }

        </View>
    )
}

export default Inputs