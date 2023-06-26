import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-paper';
import { FlashList } from "@shopify/flash-list";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = () => {
    // fetch usgin api
    /*
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        //console.log(articulos)
        setData(articulos)
      })*/
    
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    });


    setLoading(false);
  }

  useEffect(() => {
    getData()
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Posts</Text>
      <View>
      
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.body}</Text>}
          estimatedItemSize={200}
        />

      </View>
    </View>
  );
}


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
