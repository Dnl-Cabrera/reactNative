import React from 'react';
import { View, Text } from 'react-native';


const HomeView = () => {
 return (
   <View style={styles.container}>
     <Text style={styles.title}>Vista 1</Text>
   </View>
 );
};


const styles = {
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 title: {
   fontSize: 24,
   fontWeight: 'bold',
 },
};


export default HomeView;
