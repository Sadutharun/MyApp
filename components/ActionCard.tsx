import { StyleSheet, Text, View, Image, Linking, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteLink: string){
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingtext}>Blog Card</Text>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              Whats new in ReactNative in TypeScript
            </Text>
            </View>
          <Image 
          source={{
            uri:'https://www.pexels.com/photo/hand-holding-react-sticker-11035471/',
          }}
          style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text>
            
            The New Architecture is now the default in React Native 0.72, 
            offering improved performance,better interoperability with native code, 
            and support for modern React features like Suspense and Transitions.
            Bridgeless Mode:
            
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://reactnative.dev/')}>
              <Text style={styles.socialLinks}>
                Read more ...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://www.instagram.com/tharun_sadu_/')}>
              <Text style={styles.socialLinks}>
                Follow me..
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingtext:{
    fontSize: 22,
      fontWeight:'bold',
      paddingHorizontal: 8
  },
  card:{
    width:380,
    height:400,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  elevatedCard:{
    backgroundColor:'#4BCFFA',
    elevation:2,
    shadowOffset:{
      width:1,
      height:1
    },
    shadowColor:'#333',
    shadowOpacity:0.3
  },
  headingContainer:{
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'

  },
  headerText:{
    color:'#000',
    fontSize:12,
    fontWeight:500
  },
  cardImage:{
    height:190,
  },
  bodyContainer:{ 
    padding:7
  },
  footerContainer:{
    padding:10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-evenly'
  },
  socialLinks:{
    fontSize:16,
    color:'#E8290B',
    backgroundColor:'#FFF222',
    paddingHorizontal:20,
    paddingVertical:6
  }

})