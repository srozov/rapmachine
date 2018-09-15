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
    test (){
        return Chance().word()
    }

    render() {
        return (
            <View style={styles.container}>
                <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card1]} onPress={() => this.card.flip()} >
                        <Text style={styles.label}>{new Chance().word()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.card, styles.card2]} onPress={() => this.card.flip()} >
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
        backgroundColor: '#db00ff',
    },
    cardContainer:{
        width: 300,
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',

    },
    card:{
        width: 300,
        height: 450,
        alignItems: 'center',
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
        alignItems: 'center',

    },
    card2: {

        backgroundColor: '#FEB12C',
        alignItems: 'center',
    },
    label: {
        lineHeight: 470,
        textAlign: 'center',
        fontSize: 55,
        fontFamily: 'System',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
