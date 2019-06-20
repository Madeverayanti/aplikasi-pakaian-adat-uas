import React from 'react';
import { createStackNavigator, createAppContainer, } from 'react-navigation';
import Pakaian from "./Pakaian";
import Main from "./Main";
import ProfilSaya from "./ProfilSaya";
import Kategori from "./Kategori";
import Login from "./Login"
import Tambah from "./Tambah";
import Hapus from "./Hapus";
//import upload from "./upload";
import edit from "./edit";


const AppContainer = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    edit: {
      screen: edit
    },
    Pakaian: {
      screen: Pakaian
    },
    Main: {
      screen: Main
    },
    Tambah: {
      screen: Tambah
    },
    ProfilSaya: {
      screen: ProfilSaya
    },
    Kategori: {
      screen: Kategori
    },
     Hapus: {
      screen: Hapus
    },
    },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
