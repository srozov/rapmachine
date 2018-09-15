import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import Chance from 'chance';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wordToRhymeOn: new Chance().word(),
            rhymes: [new Chance().word(), new Chance().word(), new Chance().word()]
        };
    }

    updateWord (){
        this.setState({word: new Chance().word()})
    }

    render() {
        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
                        <Text style={styles.label}>?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
                        <Text style={styles.label}>{new Chance().word()}</Text>
                    </TouchableOpacity>
                </CardFlip>
                <CardFlip style={styles.cardContainer} ref={(card2) => this.card2 = card2} >
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card2.flip()} >
                        <Text style={styles.label}>?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card2.flip()} >
                        <Text style={styles.label}>{new Chance().word()}</Text>
                    </TouchableOpacity>
                </CardFlip>
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
    cardContainer:{
      width: 320,
      height: 235,
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
      lineHeight: 235,
      textAlign: 'center',
      fontSize: 55,
      fontFamily: 'System',
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });