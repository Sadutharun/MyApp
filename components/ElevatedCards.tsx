import {ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function ElevatedCards() {
  return (
    <View>
      <Text style={Styles.headingtext}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={Styles.container}>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[Styles.card, Styles.cardElevated]}>
            <Text>More....</Text>
        </View><View style={[Styles.card, Styles.cardElevated]}>
            <Text>😊😊😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
    headingtext: {
      fontSize: 24,
      fontWeight:'bold',
      paddingHorizontal: 8
    },
    container:{
        padding:8,
    },
    card: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,

    },
    cardElevated: {
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: '#5DA3FA',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})