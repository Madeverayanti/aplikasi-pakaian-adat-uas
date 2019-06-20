import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import axios from 'axios';
import Header from './Header'

export default class edit extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      Kode_Pakaian: "",
      Nama_Pakaian: "",
      Jenis_Pakaian: "",
      Harga: "",
      Kode_Kategori:"",
      
    }
  }

  _simpan = () => {
    axios.post('https://pakaianadatbali.000webhostapp.com/pakaianadatbali/updatePakaian.php', {
      
      Kode_Pakaian: this.state.Kode_Pakaian,
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

  render() {
    return (
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
              <Text>Nama_Pakaian : </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Nama_Pakaian) => this.setState({Nama_Pakaian})}
              value={this.state.Nama_Pakaian}
            />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
              <Text>Jenis_Pakaian : </Text>
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
              <Text>Kode_Kategori: </Text>
            </View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
              onChangeText={(Kode_Kategori) => this.setState({Kode_Kategori})}
              value={this.state.Kode_Kategori}
            />
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
    )
  }
}