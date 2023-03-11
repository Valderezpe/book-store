import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import {Text, Logo} from '../../components'



export const  SplashScreen= () => {
  return (
    <View style={styles.container}>
    <Logo/>
    <Text>Book - Store Website</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f242d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
