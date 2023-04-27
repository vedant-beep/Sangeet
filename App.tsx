import React, { useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  useColorScheme,
  Switch,
  View,
  FlatList,
  Image,
  Modal,
  TextInput,
  RefreshControl,
  InteractionManager
} from 'react-native';

import Login from './src/Login';
import Home from './src/Home';
import Song from './src/Song';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './src/Search';
import Play from './src/Play';

const Stack = createNativeStackNavigator();

function App() {
  // const [status, setStatus] = React.useState(true);//
  return (
    <>
      {/* <Login /> */}

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Song" component={Song} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Play" component={Play} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

