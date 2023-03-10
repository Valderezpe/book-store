import React from "react";
import { Text,StyleSheet,} from 'react-native'

export const CustomText =({ children})=>{
    return(
      <Text style={styles.titleText}>
        {children}
      </Text>
    )
}

const styles = StyleSheet.create({
 
    titleText:{
      color:'#089da1',
      fontSize: 20,
      marginTop:12
    }
  });
  