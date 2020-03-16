import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Fontisto';

const AuthForm = ({headerText, errorMessage, onSubmit, buttonText}) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <View>
            <Spacer>
                <Text h3 style = {styles.text}>{headerText}</Text>
            </Spacer>
           <View style = {styles.inputContainer}>
               <Icon
                    name = 'md-mail'
                    style = {styles.icon}
               />
                <TextInput 
                    placeholder = 'Email'
                    value = {email}
                    onChangeText = {setEmail}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    style = {styles.Input}
                    placeholderTextColor = '#ceb07a'
                />
           </View>
            <View style = {styles.inputContainer}>
                <Icon1
                    name = 'locked'
                    style = {styles.icon}
               />
                <TextInput 
                    placeholder = 'Password'
                    placeholderTextColor = '#ceb07a'
                    value = {password}
                    onChangeText = {setPassword}
                    autoCapitalize = 'none'
                    autoCorrect = {false}
                    secureTextEntry
                    style = {styles.Input}
                />
            </View>
            {errorMessage ? <Text style = {styles.err}>{errorMessage}</Text> : null}
            <Spacer>
                <TouchableOpacity 
                    onPress = {() => onSubmit({email, password})}
                    style = {styles.buttonContainer}
                >
                    <Text style = {styles.buttonLabel}>{buttonText}</Text>
                </TouchableOpacity>
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    err: {
        fontSize: 16,
        color: 'red',
        marginTop: 15,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 5,
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        marginBottom: 30,
    },
    Input: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#ceb07a'
    },
    buttonContainer: {
        backgroundColor: '#ceb07a',
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonLabel: {
        fontSize: 20,
        color: 'white'
    },
    inputContainer: {
        backgroundColor: 'white',
        borderRadius: 25,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingLeft: 10,
        flexDirection: 'row',
    },
    icon: {
        fontSize: 30,
        color: '#ceb07a',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 10,
        borderRightWidth: 2,
        borderColor: '#ceb07a',
    }
});

export default AuthForm;