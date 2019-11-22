import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import UserInput from '../../components/userInput';
import usernameImg from '../../../assets/username.png';

const login = () => {
    return (
        <View style={styles.container}>
            <UserInput
                source={usernameImg}
                placeholder="Username"
                autoCapitalize={'none'}
                returnKeyType={'done'}
                autoCorrect={false}
            />
            <Text>aaaaaaaaaaaaaa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        backgroundColor: "black"
    },
});

export default login
