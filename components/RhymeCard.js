import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import CardFlip from 'react-native-card-flip';

export default class RhymeCard extends React.Component {
    
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { counter: 0 };
    }
      
    render() {
      return (
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
            <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
                <Text style={styles.label}>?</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
                <Text style={styles.label}>{this.props.word}</Text>
            </TouchableOpacity>
        </CardFlip>
      )
    }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    cardContainer:{
      width: 320,
      height: 150,
    },
    card:{
      width: 320,
      height: '100%',
      backgroundColor: '#FE474C',
      borderRadius: 5,
      shadowColor: 'rgba(0,0,0,0.5)',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity:0.5,
    },
    card1: {
      backgroundColor: '#FE474C',
    },
    card2: {
      backgroundColor: '#FEB12C',
    },
    label: {
      lineHeight: 150,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });