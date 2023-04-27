import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
// import {connect} from 'react-redux';
import store from './store/store';
import {connect} from 'react-redux';

type user = {
  userName: string;
};



export default function Home({route,navigation }:any,props: user) {
  const [text, setText] = React.useState('');
  // let userData
  // const getUser = async () => {
  //   try {
  //      userData = await AsyncStorage.getItem('access_token')
  //   } catch (error) {
  //    console.log(error); 
  //   }
  // };
  // console.log(props.userName.access_token)

  
  let {accessToken}=route.params
  let { username } = route.params

  
  useEffect(() => {
    let hours = new Date().getHours();
    console.log()
    if (hours < 12) {
      setText('Good morning '+username)
    }
    else if (hours < 16) {
      setText('Good afternoon '+username)
    }
    else if (hours < 20) {
      setText('Good evening '+username)
    }
    else {
      setText('Good night '+username)
    }
  })



  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
      <View style={styles.main}>

        <Text style={styles.text1}>{text}</Text>
      </View>
      <View style={styles.main}>
        <View><Image source={require("../img/sangeetlogo.png")} /></View>
      </View>

      <View style={styles.main}>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          {/* <Text></Text> */}
          <Image style={styles.logo1} source={require("../img/top50india.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo1} source={require("../img/top50global.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo1} source={require("../img/chillmix.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo1} source={require("../img/newrelease.png")} />
        </TouchableOpacity>

      </View>
      <View>

        <Text style={styles.text1}>Popular artists</Text>
      </View>


      <View style={styles.main}>
        <ScrollView horizontal={true}>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song",{accessToken:accessToken, name:'arijit'})
        }>
          <Image style={styles.logo2} source={require("../img/arijit.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song",{accessToken:accessToken, name:'kk'})
        }>
          <Image style={styles.logo2} source={require("../img/kk.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song",{accessToken:accessToken, name:'ed sheeran'})
        }>
          <Image style={styles.logo2} source={require("../img/ed.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
        
          navigation.navigate("Song",{accessToken:accessToken, name:'justin'})
        }>
          <Image style={styles.logo2} source={require("../img/justin.png")} />
        </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.r}></View>
      
      </ScrollView>
      <View style={styles.footer}>
      <TouchableOpacity onPress={() =>
          navigation.navigate("Home")
        }>
          <Image style={styles.logo3} source={require("../img/home1.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Search",{accessToken:accessToken})
        }>
          <Image style={styles.logo3} source={require("../img/search.png")} />
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({

  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: 'black',
    // backgroundColor: 'white',
    flexDirection: 'column',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  logo1: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
    height: responsiveWidth(40),
    width: responsiveWidth(40)
  },

  input: {
    backgroundColor: 'white',
    // color: 'black',
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 30
  },
  btn: {
    marginVertical: responsiveHeight(2),
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#11C0D3',
    height: responsiveHeight(5),
    borderRadius: 30
  },
  text1: {
    fontSize: responsiveFontSize(3),
    color: 'white',
    // color:'black',
    fontWeight: 'bold',
    // alignSelf:'center'
  },
  logo2: {
    alignSelf: 'center',
    borderRadius:100,
    margin:10,
    // marginVertical: responsiveHeight(2),
    height: responsiveWidth(40),
    width: responsiveWidth(40)
  },

  footer:{
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  logo3: {
  
    margin:10,
    // marginVertical: responsiveHeight(2),
    height: responsiveWidth(5),
    width: responsiveWidth(5)
  },
  r:{flex:1,
    height:50,
    width:'100%'
  }
})