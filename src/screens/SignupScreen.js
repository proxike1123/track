import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import AuthFrom from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = () => {
    const {signup, state, clearErrorMessage} = useContext(AuthContext);

    return (
        <ImageBackground 
            style = {styles.background}
            source = {require('../assets/image/theme.jpg')}
            resizeMode = 'cover'
        >
            <View style = {styles.container}>
                <NavigationEvents
                    onWillBlur = {clearErrorMessage}
                />
                <AuthFrom
                    headerText = 'Signup for Tracker'
                    onSubmit = {signup}
                    buttonText = 'Signup'
                    errorMessage = {state.errorMessage}
                />
                <NavLink
                    text = 'Already have an account? Sign in instead'
                    routeName = 'signin'
                />
            </View>
        </ImageBackground>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'red',
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        justifyContent: 'center',
    }
});

export default SignupScreen;