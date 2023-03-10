import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LogoImage from '../../../../assets/logo.png'

export const Logo =()=>{
    return(
        <Image style={styles.logo} source={LogoImage}/>
    )
}

const styles = StyleSheet.create({
  
    logo:{
      width:100,
      height:100
    },
  
  });
  