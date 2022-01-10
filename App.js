import React from 'react'
import { View, Text, SafeAreaView,StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>App11111</Text>
    </SafeAreaView>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }
});
