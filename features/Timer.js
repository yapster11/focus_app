import React, {useState} from 'react';
import {View, Text, Vibration} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import Countdown from './Countdown'
import RoundedButton from './RoundedButton'
import Timing from './Timing'
import {useKeepAwake} from 'expo-keep-awake';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS
]

const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  }

  return (
    <View
        style={{
            flex: 1
        }}
    >
        <View style={{
                    flex: 0.5,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
            <Countdown 
            minutes={minutes}
            isPaused={!isStarted} 
            onProgress={setProgress} 
            onEnd={onEnd} />

            <View style={{paddingTop: 80}}>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}>
                    Focusing on:
                </Text>
                <Text style={{
                    color: 'white',
                    textAlign: 'center'
                }}>
                    {focusSubject}
                </Text>
            </View>
        </View>

        <View>
            <ProgressBar 
                progress={progress}
                color = {'#5E84E2'} 
                style = {{
                    height: 8
                }}
            />
        </View>
        <View style={{
                flex: 0.1,
                paddingTop: 40,
                flexDirection: 'row'
            }}>
            <Timing onChangeTime={setMinutes} 
            />
        </View>
        <View style={{
            flex: 0.3,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16
        }}>
            {!isStarted && <RoundedButton title='start' onPress={() => setIsStarted(true)} />}
            {isStarted && <RoundedButton title='pause' onPress={() => setIsStarted(false)} />}
        </View>

        <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            <RoundedButton size={50} title='-'onPress={clearSubject} />
        </View>
        
    </View>
  )
}

export default Timer
