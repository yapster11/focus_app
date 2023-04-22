import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import RoundedButton from './RoundedButton';


const Focus = ({addSubject}) => {
    
   const [subject, setSubject] = useState(null);

  return (
    <View style={{
    }}>
        <View style={{
            padding: 25,
            justifyContent: 'center',
            flexDirection: 'row'
        }}>
            <TextInput 
            style={{
                flex: 1,
                marginRight: 10
            }}
            label='What would you like to focus on?' 
            onChangeText={setSubject}
            />
            <View style={{
                    justifyContent: 'center'
                }}>
                <RoundedButton 
                title='+' 
                size={50}
                onPress={() => addSubject(subject)}
                />
            </View>
        </View>
    </View>
  )
}

export default Focus
