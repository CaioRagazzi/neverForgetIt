import React, { useState } from 'react';
import Dimensions from 'Dimensions';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';

const Button = () => {

    const [isLoading, setIsLoading] = useState(false)

    _onPress = () => {
        if (isLoading) return;

        setIsLoading(true);
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={this._onPress}
                activeOpacity={1}>
                {isLoading ? (
                    <ActivityIndicator size="small" color="#0000ff" />
                ) : (
                        <Text style={styles.text}>LOGIN</Text>
                    )}
            </TouchableOpacity>
        </View>
    )
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 100,
        width: DEVICE_WIDTH - 40,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});

export default Button
