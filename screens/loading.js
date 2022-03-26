import React from 'react'
import { View,Text, ActivityIndicator} from 'react-native'

function Loading() {
  
  return (
    <View>
        <ActivityIndicator
        color={'blue'} size={'large'}
        />
    </View>
  )
}

export default Loading