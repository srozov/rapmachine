import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import RhymeCard from './components/RhymeCard.js';
import Dictphone from './components/Dictphone.js';
import randomWords from 'random-words';
import {getRhymes} from './scripts/ajaxActions.js';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordToRhymeOn: randomWords(),
            rhymes: ['reim1', 'reim2', 'reim3']
        };
    }

    componentDidMount() {
        getRhymes('auto').then(response => this.setState({rhymes: [response.data[0].word, response.data[1].word, response.data[2].word]}))
      }

    onClick() {
        var word = randomWords();
        getRhymes(word).then(response => this.setState({rhymes: [response.data[0].word, response.data[1].word, response.data[2].word]}))
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Dictphone handleClick = {() => {
                
                }}/> */}
                <RhymeCard word = {this.state.rhymes[0]}/>
                <RhymeCard word = {this.state.rhymes[1]}/>
                <RhymeCard word = {this.state.rhymes[2]}/>
                <Button
                    style={styles.button}
                    onPress={()=> {this.onClick()}}
                    title="Shuffle"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />            
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
    button:{
        width:'100%'
    }
  });