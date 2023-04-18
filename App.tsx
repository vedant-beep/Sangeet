import React, {useState} from 'react';
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
function App() {
  const [status, setStatus] = useState(true);
  return (
    <>
      <Login/>                     
    </>
  );
}

export default App;
