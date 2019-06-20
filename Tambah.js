import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView, Modal, ActivityIndicator, Button,Image,TouchableHighlight, StyleSheet} from 'react-native';
import axios from 'axios';
import Header from './Header'
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Pilih Gambar',
    takePhotoButtonTitle:'Ambil Dari Kamera Hp',
    chooseFromLibraryButtonTitle:'Ambil Dari Gallery',
}

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Kode_Pakaian: "",
      Nama_Pakaian: "",
      Jenis_Pakaian: "",
      Harga: "",
      Kode_Kategori: "",
      avatarSource:null,
      uri:'',
      fileName:'',
      loading:false,
    }
  }

  _simpan = () => {
    axios.post('https://pakaianadatbali.000webhostapp.com/pakaianadatbali/tambahPakaian.php', {
      
      Kode_Pakaian: this.state.Kode_Kategori,
      Nama_Pakaian: this.state.Nama_Pakaian,
      Jenis_Pakaian: this.state.Jenis_Pakaian,
      Harga: this.state.Harga,
      Kode_Kategori: this.state.Kode_Kategori,

    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  pilihGambar=()=>{
    //   new ImagePicker();
       //var ImagePicker = require('react-native-image-picker');
       //alert('clicked');
       ImagePicker.showImagePicker(options, (response) => {
           console.log('Response = ', response);
         
           if (response.didCancel) {
             console.log('User cancelled image picker');
           } else if (response.error) {
             console.log('ImagePicker Error: ', response.error);
           }else {      
             // You can also display the image using data:
             // const source = { uri: 'data:image/jpeg;base64,' + response.data };
         
             this.setState({
               avatarSource: { uri: response.uri },
               uri:response.uri,
               fileName: response.fileName
             });
   
             
           }
         });
   }
   
   uploadGambar=()=>{
       console.log('mulai upload');
       this.setState({loading:true})
       
       const data = new FormData();
       data.append('fileToUpload', {
           uri: this.state.uri,
           type: 'images/jpeg',
           name: this.state.fileName,
       });
       const url="https://pakaianadatbali.000webhostapp.com/api/upload.php"
       fetch(url, {
           method:'post',
           body:data
       })
       .then((response) => response.json())
       .then((responseJson) =>
       {
           console.log(responseJson);
           this.setState({loading:false})
           
       });
           
   }

  render() {
    return (
      <View style={styles.vMain}>
        <ScrollView>
      <View style={{flex: 1,
            backgroundColor: 'white',}}>
                <Header header={"Pakaian Adat Bali Fashionku"} />
        <View style={{ flex: 1, marginVertical: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
            <Text>Kode Pakaian: </Text>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
            onChangeText={(Kode_Pakaian) => this.setState({Kode_Pakaian})}
            value={this.state.Kode_Pakaian}/>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Nama Pakaian: </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Nama_Pakaian) => this.setState({Nama_Pakaian})}
              value={this.state.Nama_Pakaian}
            />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Jenis Pakaian: </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Jenis_Pakaian) => this.setState({Jenis_Pakaian})}
              value={this.state.Jenis_Pakaian}
            />
        </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Harga: </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Harga) => this.setState({Harga})}
              value={this.state.Harga}
            />
        </View>
         <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Kode Kategori: </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Kode_Kategori) => this.setState({Kode_Kategori})}
              value={this.state.Kode_Kategori}
            />
            </View>
        <View style={styles.container}>
            {
                (this.state.loading==true)&&
                (
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.loading}
                    onRequestClose={()=>{
                        alert('Modal has been closed.');
                    }}
                >
                    <ActivityIndicator
                        animating={true}
                        style={styles.indicator}
                        size="large"
                    />
                </Modal>
            
                )
            }
      
                <View style={styles.gambar}>
                    <Image source={this.state.avatarSource}
                    style={{height:500,width:300,margin:5}}
                    />
                </View>
                

                <View style={styles.vButton}>
                    <View style={styles.button}>
                        <Button onPress={this.pilihGambar} color="#0000CD" title="Pilih Gambar"/>
                    </View>

                    <View style={styles.button2}>
                        <Button onPress={this.uploadGambar} color="#0000CD" title="Upload Gambar" />
                    </View>

                </View>
            </View>

          <TouchableHighlight
            style={{
              width: '80%', height: 50, marginHorizontal: '10%', marginTop : 20, justifyContent: 'center', borderRadius: 5, alignItems: 'center', backgroundColor: '#08088a'
            }}
            onPress={
              () => {
                this._simpan();
                this.props.navigation.navigate('Main')
              }
            }
            underlayColor='#F4511E'
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Simpan Data</Text>
          </TouchableHighlight>
        </View>
      </View>
      </ScrollView>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
      },
  
  indicator:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      height:80
  },
  
  header:{
      backgroundColor:'#2F4F4F',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
      },
  
  textHeader:{
      color:'white',
      fontSize:20
      },  
  
  gambar: {
      justifyContent:'center',
      alignItems:'center'
      }, 
  
  vButton:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
      },  
  
  button:{
      flexDirection:'column',
      marginRight:90,
      justifyContent:'center',
      alignItems:'center'
      },
  
  button2:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
      },
  
  textButton:{
      color:'white'
      }
  
  });