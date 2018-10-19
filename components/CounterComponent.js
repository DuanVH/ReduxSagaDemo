import React, {Component} from 'react';
import {
    Dimensions, Platform, StyleSheet, Alert,
    View, Text, TextInput, Image,
} from 'react-native';
import Button from 'react-native-button';

export default class CounterComponent extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>
                    Redux Saga Demo Version Zero
                </Text>

                <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: 'darkviolet',
                            marginLeft: 30
                        }}
                        style={{
                            fontSize: 18, color: 'white'
                        }}
                        onPress={() => {
                            this.props.onDecrement(1);
                        }}>
                        Decrement -
                    </Button>

                    <Button
                        containerStyle={{
                            padding: 10,
                            height: 45,
                            borderRadius: 10,
                            backgroundColor: 'darkviolet',
                            marginLeft: 30
                        }}
                        style={{
                            fontSize: 18, color: 'white'
                        }}
                        onPress={() => {
                            this.props.onIncrement(1);
                        }}>
                        Increment +
                    </Button>
                </View>
                <Text style={{margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                    Count: {this.props.times} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0,
    },
    textStyle: {
        margin: 20,
        color: 'forestgreen',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
