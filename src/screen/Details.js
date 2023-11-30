import React from "react";
import { Text,StyleSheet,View,} from "react-native";

import{  SliderBox }  from "react-native-image-slider-box"
const images =[

require('../images/img1.png'),
require('../images/img2.png'),
require('../images/img5.png'),
require('../images/img7.jpg'),
]

export default function Details(){

return(
<>
<View style={{width:'100%',height:200,backgroundColor:'red', marginVertical:10,}}>
<SliderBox images={images} autoplay />
</View>
<View style={Styles.container}>
<Text style={Styles.texthead}> vimal kumawat</Text>

</View>

</>
)


}
const Styles =StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'pink'
},
texthead:{
fontSize:40,
backgroundColor:'blue'

},

})