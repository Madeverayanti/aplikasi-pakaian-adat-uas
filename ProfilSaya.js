import React from 'react';
import { Text ,View,Image, FlatList,StyleSheet } from 'react-native';
import Header from "./Header";

const foto = require('./fotoku.jpg')
const axios = require('axios');
export default class ProfilSaya extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("http://mhs.rey1024.com/apibudaya/getListCategory.php")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error); 
  });

}
    render() {
        return (
            <View style={styles.vHeader}>
            <Header header={"Pakaian adat Bali Fashionku"} />
                <View style={styles.bioContainer}>
                <View style={styles.photoContainer}>
                                <Image source={foto} style={styles.photo}/>
                            </View>
                           <View style={styles.detailContainer}>
                               <Text style={styles.textBio}>Nama :Ni Made Verayanti</Text>
                               <Text style={styles.textBio}>NIM : 1715051036</Text>
                               <Text style={styles.textBio}>Kelas : 4B</Text>
                               <Text style={styles.textBio}>TTL : Tabanan,02 Mei 1999</Text>
                               <Text style={styles.textBio}>Alamat :Tabanan</Text>
                           </View>
                       </View>
                     </View>
        
            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor : 'white'
          },
          detailContainer : {
            flex: 0.6,
            justifyContent: 'center',
            marginLeft:25,
            marginTop:-20,
            paddingBottom:70
        },
        vHeader: {
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
        },
        photo:{
            width: 150,
            height: 200,

          
        },
        bioContainer : {
          flex: 1,
          flexDirection: 'column',
          
        
        },
        photoContainer : {
          flex: 0.4,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
          paddingTop:35
        },
        textBio:{
          fontSize: 15,
          justifyContent: 'center',
          color : 'black'

        },
        text:{
            fontSize:20,
            color:'black',

        },
        });
