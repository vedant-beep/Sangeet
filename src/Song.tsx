import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const Search = ({ route, navigation }: any) => {
  let { accessToken } = route.params
  let { name } = route.params
  const [searchResults, setSearchResults] = useState([]);
  console.log(name)
  var img

  if (name == 'arijit') {
    img = require("../img/arijit.png")
  } else if (name == 'kk') {
    img = require("../img/kk.png")

  }
  else if (name == 'ed sheeran') {
    img = require("../img/ed.png")

  }
  else {
    img = require("../img/justin.png")

  }

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${name}&type=track`, {
      headers: {
        Authorization: 'Bearer  ' + accessToken,
      },
    })
      .then((response) => response.json())
      .then((json) => setSearchResults(json.tracks.items))
      .catch((error) => console.error(error));


  }, [])

  const renderTrack = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={()=>
        navigation.navigate("Play",{id:item.id,img:item.album.images[0].url})
      }>
      
        <View style={{ flexDirection: 'row', padding: 10 }}>
        
        <Image
            style={{ width: 50, height: 50, marginRight: 10 }}
            source={{ uri: item.album.images[0].url }}
          />
          
          <View>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text>{item.artists.map((artist: any) => artist.name).join(', ')}</Text>
            <Text style={{ color: 'gray' }}>{item.album.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{
        backgroundColor: '#11C0D3',
        alignSelf: 'center',
        // add shadows for Android only
        width: responsiveWidth(46), height: responsiveWidth(46),
        elevation: 10,
        shadowColor: 'black'
      }}>
        <Image style={styles.logo1} source={img} />
      </View>

      <Text style={styles.text}>{name}</Text>

      <FlatList
        data={searchResults}
        renderItem={renderTrack}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({


  logo1: {
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
    height: responsiveWidth(40),
    width: responsiveWidth(40),

  },
  text: {
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3)

  }


})

export default Search;