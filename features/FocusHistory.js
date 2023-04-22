import React from 'react';
import {View, Text, FlatList} from 'react-native';

const FocusHistory = ({history}) => {
  if(!history || !history.length) 
  return <Text style={{color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center'
        }}>We haven't focused on anything yet.</Text>;

  const renderItem = ({item}) => 
    <Text style={{
        fontSize: 24,
        color: 'white',
        paddingTop: 8
    }}>-{item}</Text>

  return (
    <View style={{
        padding: 24,
        flex: 1
    }}>
        <Text style={{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }}>
            Things we've focused on:
        </Text>
        <FlatList 
        data={history}
        renderItem={renderItem}
        />
    </View>
  )
}

export default FocusHistory
