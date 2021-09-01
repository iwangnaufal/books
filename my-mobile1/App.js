import { StatusBar } from 'expo-status-bar';
import React from 'react';
import React, {useState, useEffect} from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios'
import BookList from './Components/BookList'
import Header from './Components/Header'

import styles from './styles/appStyle'

export default function App() {

  useEffect(()=>{

  }, [])
  const fetchBooks = () =>{
    axios({
      method: "GET",
      url : "http://localhost:4000/api/getAll",
    })
    .then((response)=> console.log(response))
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9f9f9f" hidden={false} />

      <ScrollView style={styles.scrollView}>
        <Header/>
        <BookList/>
      </ScrollView>
    </View>
  );
}