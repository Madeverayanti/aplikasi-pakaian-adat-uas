import React, { Component } from "react";
import { View, Text,Button,TextInput, StyleSheet, Image, TouchableHighlight} from "react-native"; 
import Header from "./Header";
class Main extends Component {
    static navigationOptions = {
        header: null
    }
    render() {     
        return (    
            <View style={styles.vHeader}>
                <Header header={"Pakaian adat Bali Fashionku"} />
                <View style={styles.box4}>
                
                </View>
                    <Image 
                        style={styles.gambar} 
                        source={require("./logo.png")} 
                        resizeMode = "stretch" 
                    /> 
                <View style={styles.box1}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Pakaian') }>
                        <Text style={styles.txtBox2}>Data Pakaian</Text>
                    </TouchableHighlight>
                </View>

                


                <View style={styles.box2}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Kategori') }>
                        <Text style={styles.txtBox2}>Kategori Pakaian</Text>
                    </TouchableHighlight>
                </View>

                

                <View style={styles.box2}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('ProfilSaya') }>
                        <Text style={styles.txtBox2}>Tentang Saya</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.box2}>
                    <TouchableHighlight activeOpacity={0.5} 
                        style={styles.BoxStyle} onPress={()=> this.props.navigation.navigate('Login') }>
                        <Text style={styles.txtBox2}>LogOut</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );   
    } 
}   

   const styles = StyleSheet.create({
    vHeader: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gambar:{
        marginTop :-50,
        height: 150,
        width: 250,
    },
    box1: {
        flex: 0.5,
        margin:5,
        marginTop : 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    box2: {
        flex: 0.5,
        margin:5,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'center',
        
    },
    box4: {
        flex: 0.1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin : 20
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 18,

    },

    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center', 
      },
    textBox2:{
        color: 'white',
        fontSize: 15,    
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

export default Main;