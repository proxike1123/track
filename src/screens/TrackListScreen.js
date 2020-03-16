import React, {useContext} from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import {Context} from '../context/TrackContext';
import {NavigationEvents} from 'react-navigation';


const TrackListScreen = ({navigation}) => {

    const {state, fetchTracks} = useContext(Context);

    return (
        <ImageBackground 
            style = {styles.container}
            source = {require('../assets/image/theme1.jpg')}
        >
            <View style = {styles.blur}>
                <NavigationEvents onWillFocus = {fetchTracks}/>
                <FlatList
                    data = {state}
                    keyExtractor = {item => item._id} 
                    renderItem = {({item}) => {
                        return (
                            <TouchableOpacity 
                            style = {styles.item}
                            onPress = {() => navigation.navigate('trackDetail', {_id: item._id})}
                            >
                                    <Text style = {styles.text}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        </ImageBackground>
    )
}

TrackListScreen.navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: '#AD7F61'
        },
        title: 'Track List',
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center',
    };
};

const styles = StyleSheet.create({
    item: {
        borderRadius: 25,
        margin: 5,
        borderWidth: 3,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#AD7F61',
        backgroundColor: '#F8F0D7'
    },
    text: {
         fontSize: 20,
         color: '#AD7F61',
    },
    container: {
        flex: 1,
    },
    blur: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingTop: 25,
    }
});

export default TrackListScreen;