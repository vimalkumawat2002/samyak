import React from 'react';
 import img from './src/img/img7.png'
import img1 from './src/logo/logo5.png'
import img2 from './src/logo/logo7.png'
import img3 from './src/logo/logo9.png'
import {View,Text,StyleSheet,Image} from 'react-native';
export default function app(){

    return(
<>
        <Text style={styles.container}>GUDDU </Text>
        <Text style={styles.text}>nisha kumawat </Text>
        <Image source={img}  style ={{width:200,height:200,}}/>
        <Image source={img1}  style ={{width:200,height:150}}/>
        <Image source={img2}  style ={{width:100,height:100}}/>
        <Image source={img3}  style ={{width:200,height:100}}/>

        <View style={{width:'100%',height:100,backgroundColor:'pink',flexDirection:'column'}}>

 <Image source={img2}  style ={{width:100,height:100,}}/>
 <Text style={styles.text}>guddu </Text>
        </View>
        
        </>
    )
}
const styles =StyleSheet.create({

container:{
    fontSize:60,
    backgroundColor:'green'
    
  
    

},
text:{

    fontSize:50,
backgroundColor:'gray'
}


})