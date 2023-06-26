import React, {useState} from 'react'

import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//Components
import AboutView from './components/AboutView/AboutView'
import CamareView from './components/CamareView/CamareView'
import HomeView from './components/HomeView/HomeView'

export default function App() {
  
  const[activeView,setActiveView] = useState('Home');

  const renderView = () => {
    switch (activeView) {
      case 'Home':
        return <HomeView/>;
      case 'About':
        return <AboutView/>;
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity 
          onPress = {() => setActiveView('Home')}
        >
          <Text style={styles.home}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress = {() => setActiveView('About')}
        >
          <Text style={styles.about}>
            About
          </Text>
        </TouchableOpacity>
      </View>
      {renderView()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  menu: {
    margin: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  about: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  home: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
