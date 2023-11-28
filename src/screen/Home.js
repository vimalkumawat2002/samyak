import React from 'react'
import {View,Text,StyleSheet,Image,ScrollView,TouchableOpacity} from 'react-native'
import img from '../images/img2.png'
import img1 from '../images/img1.png'
import img2 from '../images/img5.png'


 function Home({navigation}){

    return(
    <ScrollView>
    <View style={styles.container}>
            <View style={styles.headerview}>
                <View style={styles.logoview}>
                    <TouchableOpacity onPress={()=>navigation.navigate('product')}>
                   <Image source={require('../images/img2.png')} style={styles.menuimage}/> 
                   </TouchableOpacity>
                </View>
                <View style={styles.textview}>
                    <Text style={styles.textlogo}>vimal</Text>
                </View>

                <View style={styles.actionview}>
                   {/*  <Image source={require('../images/logo/notification.png')} style={styles.menuimage}/> */}
                </View>
            </View>
            <View>
             <Image source={img} style ={{ width:'100%',height:200,}}/> 
            </View>
            <View>


            <View style={styles.headerview}>
                
                
                <View style={styles.textview}>
                    <Text style={styles.textlogo1}>GUDDU KUMAWAT</Text>
                </View>
                <View style={styles.actionview}>
                   {/*  <Image source={require('../images/logo/notification.png')} style={styles.menuimage}/> */}
                </View>
            </View>
        </View>
<View>

 <Image source={img1} style ={{ width:'100%',height:200,}}/> 
    
</View>
<View>

<View style={styles.headerview}>
                
                
                <View style={styles.textview}>
                    <Text style={styles.textlogo1}>NIKKU KUMAWAT</Text>
                </View>
                <View style={styles.actionview}>
                   {/*  <Image source={require('../images/logo/notification.png')} style={styles.menuimage}/> */}
                </View>
            </View>


</View>
<View>
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
 <Image source={img2} style ={{ width:'100%',height:100,}}/> 
    



</View>

        </View>
        </ScrollView>
    )
}
export default Home


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    headerview:{
      marginHorizontal:20,
      marginVertical:20 ,
      flexDirection:'row' ,
      alignItems:'center'
    },
    menuimage:{
        width:30,
        height:30                    
    },
    textlogo:{
        marginHorizontal:10,
        fontSize:20,
        fontWeight:'bold'
        
    },
    textlogo1:{
        marginHorizontal:10,
        fontSize:20,
        fontWeight:'bold'
        
    },
   
    logoview:{
        flex:1
    },
    textview:{
        flex:5,
    }
    ,
    actionview:{
        flex:1,
        alignItems:'flex-end'
    }

})