import { View, Text,Button,StyleSheet,Image } from 'react-native'
// import Sound from 'react-native-sound';
import { Audio } from 'expo-av';

import React, {useState, useEffect} from 'react'

type myprops = {
    title: string
}
export default function SongListItem(props:myprops) {

//     const sound = React.useRef(new Audio.Sound());
// const [Status, SetStatus] = React.useState(false);

// useEffect(() => {
    
//   LoadAudio();
// }, []);


// const LoadAudio = async () => {
//     const checkLoading = await sound.current.getStatusAsync();
//     try {
//       const result = await sound.current.loadAsync({ uri: Song }, {}, true);
//       // Here Song is the uri of the Audio file
//       if (result.isLoaded === false) {
//         console.log('Error in Loading Audio');
//       } else {
//         PlayAudio();
//       }
//     } catch (error) {
//       console.log('Error in Loading Audio');
//     }
//   };

//   const PlayAudio = async () => {
//     try {
//       const result = await sound.current.getStatusAsync();
//       if (result.isLoaded) {
//         if (result.isPlaying === false) {
//           sound.current.playAsync();
//           SetStatus(true);
//         }
//       } else {
//         LoadAudio();
//       }
//     } catch (error) {
//       SetStatus(false);
//     }
//   };

//   const PauseAudio = async () => {
//     try {
//       const result = await sound.current.getStatusAsync();
//       if (result.isLoaded) {
//         if (result.isPlaying === true) {
//           sound.current.pauseAsync();
//           SetStatus(false);
//         }
//       }
//     } catch (error) {
//       SetStatus(false);
//     }
//   }


    // const [playing, setPlaying] = useState(false);
    // useEffect(() => {
    //     audio.setVolume(1);
    //     return () => {
    //       audio.release();
    //     };
    //   }, []);
    // var audio = new Sound('https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/70/9f/c7/709fc7e3-8e43-4b42-4f6e-c9f0a94842ce/mzaf_8187227090010990098.plus.aac.ep.m4a',undefined,error=>{
    //     if(error){
    //         console.log('failed to load the sound', error);
    //         return;
    //     }
    //     console.log(
    //         'duration in seconds: ' +
    //           audio.getDuration() +
    //           'number of channels: ' +
    //           audio.getNumberOfChannels(),
    //       );
    // })
    // const playPause = ()=>{
    //     if(audio.isPlaying()){
    //         console.log(audio.isPlaying())
    //         audio.pause();
    //         setPlaying(false);
    //     }
    //     else{
    //         setPlaying(true);
    //         audio.play(success=>{
    //             if(success){
    //                 setPlaying(false);
    //                 console.log("finished playing ...");
                    
    //             }else{
    //                 setPlaying(false);
    //                 console.log("playback failed due to audio decoding errors...")
    //             }
    //         })
    //     }
    // }
    
 
  return (
    <View style={styles.songList}>
        {/* Object.albums.items[0]".id" */}
        <View style={styles.leftItem}>
          <Image style={styles.thumbnail} source={{ uri: 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/38/ea/1b38eacd-158d-5040-8887-2786d2a641bc/192641874338_Cover.jpg/400x400cc.jpg' }} />
          <View style={styles.songDesc}>
            <Text style={styles.songTitle}>{props.title}</Text>
            <View style={{display:'flex', flexDirection:'row'}}>
              <Text style={styles.lyrics}>LYRICS</Text>
              <Text style={{color:'grey'}}>Kaifi Kaifi</Text>
            </View>
          </View>
        </View>
        <View style={styles.rightItem}>
            <Button title='play Pause' onPress={()=>{
                // playPause();
            }}/>
          <Image style={styles.dots} source={require('../img/three-dots.png')} />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    songList: {
      display: 'flex',
      flexDirection: 'row',
      padding: 10,
      margin: 10,
      justifyContent: 'space-between',
      backgroundColor:'#1D1C1C',
    },
    leftItem: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    thumbnail: {
      height: 50,
      width: 50
    },
    songDesc: {
      marginLeft: 10
    },
    rightItem: {},
    dots: {
      height: 40,
      width: 30,
      alignSelf: 'center'
    },
    songTitle:{
      fontSize: 18,
      color: 'white'
    },
    lyrics:{
      fontSize:13,
      backgroundColor: 'grey',
      width: 47,
      color:'black',
      textAlign: 'center',
      marginRight: 10,
      marginTop: 3,
      borderRadius: 5
    }
  })
