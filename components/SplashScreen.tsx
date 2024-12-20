import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={Styles.container}>
        <Image
  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }}
  style={styles.logo}
/>

      <Text style={Styles.Text}>Wellcome To My App</Text>
    </View>
  )
}

export default SplashScreen

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    },
    Text: {
        marginTop: 20,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    },
    logo:{
        width: 150, // Adjust logo width
    height: 150, // Adjust logo height
    resizeMode: 'contain',
    }

})