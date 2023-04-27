import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import TrackPlayer, { Capability } from 'react-native-track-player';
import { Image } from 'react-native-elements';

export default function Play({ route, navigation }: any) {
  const [isPlyaing, setIsPlaying] = useState(false);
  let { img } = route.params

  useEffect(() => {
    setupTrackPlayer();

  }, [])

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
      TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause],
      });
      await TrackPlayer.add([{url:'https://sample-music.netlify.app/death%20bed.mp3' }]);
      getTime();
    } catch (e) {
      console.log(e);
    }
  };

  const getTime = async () => {
    const time = await TrackPlayer.getDuration();
    console.log(time);
  };


  return (<>
    <Image
            style={{ width: 400, height: 400, marginRight: 10,alignSelf:'center' }}
            source={{ uri: img }}
          />
    <View style={{flex:1,
      flexDirection: 'row',
      justifyContent: 'space-evenly', alignSelf: 'center',width:'100%',marginTop:30
    }}>
      <Image
        source={require("../img/images1.png")}
        style={{ width: 50, height: 50 }} />
      <TouchableOpacity onPress={() => {
        if (isPlyaing == true) {
          TrackPlayer.pause();
          setIsPlaying(false);
        } else {
          TrackPlayer.play();
          setIsPlaying(true);
        }
      }}>

        <Image
          source={isPlyaing == true ? require("../img/pause.png") : require("../img/play-buttton.png")}
          style={{ width: 50, height: 50 }} />


      </TouchableOpacity>
      <Image
        source={require("../img/images.png")}
        style={{ width: 50, height: 50 }} />


    </View >
    </>
  )
}