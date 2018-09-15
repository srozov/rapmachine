import React from 'react';
import { StyleSheet, View } from 'react-native';
import RhymeCard from './components/RhymeCard.js';
import Dictphone from './components/Dictphone.js';
import randomWords from 'random-words';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordToRhymeOn: randomWords(),
            rhymes: ['reim1', 'reim2', 'reim3']
        };
        console.log(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
            {/* <Dictphone handleClick = {() => {

            }}/> */}
            <RhymeCard word = {this.state.rhymes[0]}/>
            <RhymeCard word = {this.state.rhymes[1]}/>
            <RhymeCard word = {this.state.rhymes[2]}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });