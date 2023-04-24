import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-elements'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveWidth
} from "react-native-responsive-dimensions";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ route,navigation }: any): JSX.Element {
  const [text, setText] = React.useState('');
  let {token} = route.params;
  useEffect(() => {
    let hours = new Date().getHours();
    console.log('access token '+token);
    if (hours < 12) {
      setText('Good Morning')
    }
    else if (hours < 16) {
      setText('Good Afternoon')
    }
    else if (hours < 20) {
      setText('Good Evening')
    }
    else {
      setText('Good Night')
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
          navigation.navigate("Song")
        }>
          <Image style={styles.logo2} source={require("../img/arijit.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo2} source={require("../img/kk.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo2} source={require("../img/ed.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
          navigation.navigate("Song")
        }>
          <Image style={styles.logo2} source={require("../img/justin.png")} />
        </TouchableOpacity>
        </ScrollView>
      </View>
      </ScrollView>
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


})