import React from 'react'
import { View, Text, Modal, FlatList } from 'react-native'

export default function CountryCodePick(props) {
    const renderItemView = (item) =>{
        console.log(item);
        return(
            <View style={{flex: 1, paddingLeft:20, height:40}}>
                <Text style={{color:'black',fontSize: 40, marginTop: 50}}>
                    {item.label}
                </Text>
            </View>
        )
    }
    return (
        <>
            <View>
                <Modal visible={props.isVisible}>
                    <View style={{flex: 1}}>
                        <FlatList 
                        data={props.data}
                        renderItem={renderItemView}
                        />
            
                    </View>
                </Modal>
            </View>
        </>
    )
}
