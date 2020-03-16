import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
    return (
        <TouchableOpacity onPress = {() => navigation.navigate(routeName)}>
            <Text style = {styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 16,
    }
});

export default withNavigation(NavLink)