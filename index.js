import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Constants from 'expo-constants';
import Focus from './features/Focus';
import Timer from './features/Timer';
import FocusHistory from './features/FocusHistory';

const Home = () => {
    const [currentSubject, setCurrentSubject] = useState('');
    const [history, setHistory] = useState([]);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#252250',
        }}>
            {!currentSubject ? 
            (
            <>
            <Focus addSubject={setCurrentSubject} /> 
            <FocusHistory history={history} />
            </>
            )
            : <Timer 
            focusSubject={currentSubject}
            onTimerEnd={(subject)=>{setHistory([...history, subject])}}
            clearSubject={()=>setCurrentSubject(null)}
            />
            } 
        </SafeAreaView>
    )
};

export default Home;