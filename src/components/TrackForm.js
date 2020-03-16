import React, {useContext} from 'react';
import {Button} from 'react-native-elements';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
    const {
        state: {name, recording, locations}, 
        startRecording, 
        stopRecording, 
        changeName
    } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return ( 
        <View>
            <Spacer>
                <TextInput 
                    value = {name} 
                    onChangeText = {changeName} 
                    placeholder = 'Enter track name'
                    placeholderTextColor = '#aa7d5d'
                    style = {styles.input}
                />
            </Spacer>
            <Spacer>
                {recording 
                    ? 
                    <TouchableOpacity 
                        style = {styles.stopButton}
                        onPress = {stopRecording}
                    >
                        <Text style = {styles.buttonText}>Stop</Text>
                    </TouchableOpacity>
                    : 
                    <TouchableOpacity 
                        style = {styles.startButton}
                        onPress = {startRecording}
                    >
                        <Text style = {styles.buttonText}>Start Recording</Text>
                    </TouchableOpacity>
                }
            </Spacer>
            {
                !recording && locations.length
                ? 
                <Spacer>
                    <TouchableOpacity 
                        style = {styles.startButton}
                        onPress = {saveTrack}
                    >
                        <Text style = {styles.buttonText}>Save Recording</Text>
                    </TouchableOpacity>
                </Spacer>
                : null
            }
        </View>
    )
};

const styles =StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#ceb07a',
        paddingLeft: 20,
        fontSize: 20,
        color: '#aa7d5d',
    },
    startButton: {
        width: '100%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AD7F61',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    stopButton: {
        width: '100%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ceb07a',
        borderRadius: 8,
        borderWidth: 4,
        borderColor: '#AD7F61',
    }
});

export default TrackForm;