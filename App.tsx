import { ScrollView, Text,SafeAreaView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import SplashScreen from './components/SplashScreen'
import ActionCard from './components/ActionCard'




const App = () => {
  SplashScreen
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <FancyCards />
      <ActionCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
