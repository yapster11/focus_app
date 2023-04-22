import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const RoundedButton = ({style={}, textStyle={}, size = 125, ...props}) => {    
  return (
    <TouchableOpacity 
        style={{
            borderRadius: size / 2,
            width: size,
            height: size,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'white',
            borderWidth: 2
        }}
        onPress={props.onPress}
    >
        <Text style={{
            color: 'white',
            fontSize: size / 3
        }}>
            {props.title}
        </Text>
    </TouchableOpacity>
  )
}

export default RoundedButton
