import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={Styles.headingtext}>React Native </Text>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Image 
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width: 380, height: 380,borderRadius: 6,}}
             />
        </View>
    </View>
  )
}

const Styles = StyleSheet.create({
    headingtext: {
        fontSize: 20,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    card: {
    
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: '',
        elevation: 3
    },
})