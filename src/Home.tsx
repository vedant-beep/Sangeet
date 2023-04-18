import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  useResponsiveWidth
} from "react-native-responsive-dimensions";

export default function Home({ navigation }: { navigation: any }): JSX.Element {
  return (
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: 'yellow',
    flexDirection: 'column',
  },
  main: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
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
  }


})