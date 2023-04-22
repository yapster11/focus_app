import React from 'react';
import { View } from 'react-native';
import RoundedButton from './RoundedButton';

const Timing = ({onChangeTime}) => {
  return (
    <>
        <View style={{
        flex: 1,
        alignItems: 'center',
    }}> 
            <RoundedButton size={75} title="10" onPress={()=> onChangeTime(10)} />
        </View>
        <View style={{
        flex: 1,
        alignItems: 'center',
    }}> 
            <RoundedButton size={75} title="15" onPress={()=> onChangeTime(15)} />
        </View>
        <View style={{
        flex: 1,
        alignItems: 'center',
    }}> 
            <RoundedButton size={75} title="20" onPress={()=> onChangeTime(20)} />
        </View>
    </>
    
  )
}

export default Timing
