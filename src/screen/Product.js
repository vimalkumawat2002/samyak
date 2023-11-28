import React from 'react'

import {View,Text,Image,StyleSheet, ScrollView} from 'react-native'
import{data} from '../data/data'

export default function Product(){
data.map(d=>{
    console.log(d.productname)
})

    return(
        <View style={styles.container}>


            <View style={styles.producttextview}>
                <Text style={styles.producttexthead}>Product</Text>

            </View>
            <ScrollView>
        { 
            data.map(d=>( 
                <>
             <View style={styles.productview}>
                 <View style={styles.productviewin}>
                    <Image source={d.image} style={styles.productimg}/>
                   <View style={styles.productviewtext}>
                    <Text style={styles.productimgtext}>{d.productname}</Text>
                    <Text style={styles.productimgtext}>Rs.{d.rate}</Text>
                    </View>
                    <View style={styles.productviewtext}>
                    <Text style={styles.productimgtext}>Details</Text>
                   
                    </View>
                    
                </View>
                
            </View> 
            </>
            ))
            
        } 
</ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    producttextview:{
       marginHorizontal:10,
    },
    productview:{
      flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10,
        marginVertical:10,
      
    },
    producttexthead:{
       fontSize:30 ,
       color:"#000"
    },
    productviewin:{
        flex:1,
        flexDirection:'row',
        borderRadius:15,
        alignItems:'center',
        backgroundColor:'pink' ,
        paddingHorizontal:10,
        paddingVertical:10
    }
    ,
    productimg:{
        width:100,
        height:100
    },
    productimgtext:{
        fontSize:20,
        color:'#000'
    },
    productviewtext:{
        flex:1,
        marginLeft:20
    }
})