import React from 'react'
import PropTypes from 'prop-types';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import Dimensions from 'Dimensions';

const UserInput = props => {
    return (
        <View style={styles.inputWrapper}>
            <Image source={props.source} style={styles.inlineImg} />
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCorrect={props.autoCorrect}
                autoCapitalize={props.autoCapitalize}
                returnKeyType={props.returnKeyType}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
            />
        </View>
    )
}

UserInput.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
  };

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      width: DEVICE_WIDTH - 40,
      height: 40,
      marginHorizontal: 20,
      paddingLeft: 45,
      borderRadius: 20,
      color: '#ffffff',
    },
    inlineImg: {
      position: 'absolute',
      zIndex: 99,
      width: 22,
      height: 22,
      left: 35,
      top: 9,
    },
  });

export default UserInput
