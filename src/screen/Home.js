import React from 'react'
import { View, Text, StyleSheet, Image,FlatList, TouchableOpacity } from 'react-native'
import { SliderBox } from "react-native-image-slider-box";
import img1 from '../images/img1.png'
import{imageslider,data} from '../data/data'
function Home({ navigation }) {

    function renderitem(data){
      
       return(
        
        <View style={[styles.boxshadow,styles.productrender]}>
        <TouchableOpacity onPress={()=>navigation.navigate('product',data)}>
        
        <Image source={data.item.image} style={{width:'100%',height:200}}/>
        <Text>{data.item.productname}</Text>
        </TouchableOpacity>
        </View>
        
       )
    }

    return (
       
            <View style={styles.container}>
                <View style={styles.headerview}>
                    <View style={styles.logoview}>
                        <TouchableOpacity onPress={() => navigation.navigate('product')}>
                            <Image source={require('../images/img2.png')} style={styles.menuimage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.textlogo}>GUDDU</Text>
                    </View>

                     </View>
                <View>
                <SliderBox images={imageslider}  autuplay circleLoop/>
                </View>
                <View>
            </View>
            <View style={styles.productshow}>
        <FlatList
                data={data}
                renderItem={renderitem}
                keyExtractor={(item)=>item.index}
                numColumns={2}
               />
            </View>
        </View>
    
    )
}
export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerview: {
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuimage: {
        width: 30,
        height: 30
    },
    textlogo: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold'

    },
    textlogo1: {
        marginHorizontal: 10,
        fontSize: 20,
        fontWeight: 'bold'

    },

    logoview: {
        flex: 1
    },
    textview: {
        flex: 5,
    }
    ,
    actionview: {
        flex: 1,
        alignItems: 'flex-end'
    },
    productshow:{
        flex:1
    },
   productrender: {
    flex:1,
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:40,
    overflow:'hidden',
    
},
    boxshadow: {
        shadowColor: 'grey',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 3,
      },

})