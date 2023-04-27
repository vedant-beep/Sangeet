import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';

const Search = ({ route, navigation }: any) => {
  let { accessToken } = route.params
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text: any) => {
    setQuery(text);
    fetch(`https://api.spotify.com/v1/search?q=${text}&type=track`, {
      headers: {
        Authorization: 'Bearer  ' + accessToken,
      },
    })
      .then((response) => response.json())
      .then((json) => setSearchResults(json.tracks.items))
      .catch((error) => console.error(error));
  };

  const renderTrack = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => console.log('Track selected:', item.id)}>
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
      <TextInput
        style={{ backgroundColor:'black',color:'white',padding:10}}
        placeholderTextColor={'white'}
        placeholder="Search a song"
        onChangeText={handleSearch}
        value={query}
      />
      <FlatList
        data={searchResults}
        renderItem={renderTrack}
        keyExtractor={(item:any) => item.id}
      />
    </View>
  );
};

export default Search;