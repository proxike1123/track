import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';
import {Context} from '../context/AuthContext';
import {Context as TrackContext} from '../context/TrackContext';
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
    const {signout, state: {email}} = useContext(Context)
    const {state} = useContext(TrackContext);
    return (
        <ImageBackground 
            style = {styles.container}
            source = {require('../assets/image/theme1.jpg')}
        >
            <NavigationEvents/>
            <View style = {styles.detail}>
                <View style = {styles.row}>
                    <Text style = {styles.title}>Account: </Text>
                    <Text style = {styles.content}>{email}</Text>
                </View>
                <View style = {styles.row}>
                    <Text style = {styles.title}>TotalTrack: </Text>
                    <Text style = {styles.content}>{state.length}</Text>
                </View>
                <TouchableOpacity 
                    onPress = {signout}
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

AccountScreen.navigationOptions = () => {
    return {
        title: 'Account',
        tabBarIcon: ({tintColor}) => <Icon name = 'md-contact' size = {30} color = {tintColor}/>
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detail: {
        height: 250,
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderColor: '#ceb07a',
        borderWidth: 10,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#F8F0D7',
        height: 40,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderColor: '#ceb07a',
        borderWidth: 3,
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    content: {
        fontSize: 18,
    },
    buttonText: {
        color: '#AD7F61'
    }
});

export default AccountScreen;