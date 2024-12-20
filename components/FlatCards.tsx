import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={Styles.headingtext}>Flat Cards</Text>
      <View style={Styles.container}>
        <View style={[Styles.card,Styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[Styles.card,Styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[Styles.card,Styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[Styles.card,Styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[Styles.card,Styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const Styles = StyleSheet.create({
  headingtext: {
    fontSize: 24,
    fontWeight:'bold',
    paddingHorizontal: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding:8
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8
  },
  cardOne: {
    backgroundColor: '#EF5354'
  },
  cardTwo: {
    backgroundColor: '#50DBB4'
  },
  cardThree: {
    backgroundColor: '#5DA3FA'
  }
})