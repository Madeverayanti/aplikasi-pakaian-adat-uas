import React from 'react';
import { Text ,View,FlatList,StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from "./Header";


const axios = require('axios');
export default class Pakaian extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("https://pakaianadatbali.000webhostapp.com/pakaianadatbali/getPakaian.php")
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
                             
                            <Text>Kode Pakaian : {item.Kode_Pakaian}</Text>
                            <Text>Nama Pakaian : {item.Nama_Pakaian}</Text>
                            <Text>Jenis Pakaian : {item.Jenis_Pakaian}</Text>
                            <Text>Harga : {item.Harga}</Text>
                            <Text>Kode Kategori :{item.Kode_Kategori}</Text>
                            <Text></Text>
                            </View>
                    )
                    }
                />
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Tambah') }>
                        <Text style={styles.txtBox2}>Tambah </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('edit') }>
                        <Text style={styles.txtBox2}>Edit </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Hapus') }>
                        <Text style={styles.txtBox2}>Hapus </Text>
                    </TouchableHighlight>
                </View>
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
        flex: 0.8,
        margin:20,
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
