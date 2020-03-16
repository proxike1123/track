import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <ImageBackground
            source = {require('../assets/image/theme1.jpg')}
            style = {styles.background}
        
        >
            <View style = {styles.container}>
                <NavigationEvents
                    onWillBlur = {clearErrorMessage}
                />
                <AuthForm
                    headerText = 'Sign In to your account'
                    errorMessage = {state.errorMessage}
                    onSubmit = {signin}
                    buttonText = 'Signin'
                />
                <NavLink
                    text = "Don't have an account? Sign up instead"
                    routeName = 'signup'
                />
            </View>
        </ImageBackground>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    }
});

export default SigninScreen;