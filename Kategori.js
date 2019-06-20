import React from 'react';
import { Text ,View,FlatList, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios'); 
export default class Kategori extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: []
        };
    }
    componentDidMount(){
    axios.get('https://pakaianadatbali.000webhostapp.com/pakaianadatbali/getKategoriPakaian.php')
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
            <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"Pakaian adat Bali Fashionku"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                            
                            <Text>Kode Kategori :{item.Kode_Kategori}</Text>
                            <Text>Nama Kategori : {item.Nama_Kategori}</Text>
                            <Text>Keterangan : {item.Keterangan}</Text>
                            <Text></Text>
                            </View>
                    

                        
                    )
                    }
                />
            
            </View>
            </ScrollView>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            backgroundColor: 'white',
        },
        box1: {
            flex: 0.1,
            margin:5,
            flexDirection: 'row',
            backgroundColor: 'white',
            justifyContent: 'center',
        },
        txtBox2: {
            color: 'white',
            alignItems: 'center',
            fontSize: 18,
    
        },
        BoxStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#08088a',
          borderRadius: 5,
          width: '80%',
          height: 50, 
        }
    });
    
