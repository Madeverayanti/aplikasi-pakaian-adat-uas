import React, { Component } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import axios from 'axios';
import Header from './Header'

export default class Hapus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Kode_Pakaian: "",
    }
  }

  _hapus = () => {
    axios.post('https://pakaianadatbali.000webhostapp.com/pakaianadatbali/hapusPakaian.php', {
      Kode_Pakaian: this.state.Kode_Pakaian,
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
      <View style={{ flex: 1 }}>
        <Header title='Hapus Pakaian' />
        <View style={{ flex: 1, marginVertical: 20 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: '5%', marginBottom: 5 }}>
          <View style={{ width: '30%' }}>
            <Text>Kode Pakaian : </Text>
          </View>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '70%', borderRadius: 5 }}
            onChangeText={(Kode_Pakaian) => this.setState({Kode_Pakaian})}
            value={this.state.Kode_Pakaian}
          />
        </View>

          <TouchableHighlight
            style={{
              width: '90%', marginHorizontal: '5%', borderRadius: 20, height: 50, justifyContent: 'center', 
              alignItems: 'center', backgroundColor: '#08088a'
            }}
            onPress={
              () => {
                this._hapus();
                this.props.navigation.navigate('Main')
              }
            }
            underlayColor='#08088a'
          >
            <Text style={{ fontSize: 24, color: 'white' }}>Hapus Data Pakaian</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}