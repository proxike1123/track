import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Context} from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps'

const TrackDetailScreen = ({navigation}) => {
    const _id = navigation.getParam('_id');
    const {state} = useContext(Context);

    const track = state.find(track => track._id === _id);
    const initialCoords = track.locations[0].coords;

    return (
        <View style = {styles.container}>
            <Text style = {styles.name}>{track.name}</Text>
            <View style = {styles.mapContainer}>
                <MapView
                    style = {styles.map}
                    initialRegion = {{
                        longitudeDelta: 0.01,
                        latitudeDelta: 0.01,
                        ...initialCoords,
                    }}
                >
                    <Polyline coordinates = {track.locations.map(loc => loc.coords)}/>
                </MapView>
            </View>
        </View>
    )
}

TrackDetailScreen.navigationOptions = () => {
    return {
        headerStyle: {
            backgroundColor: '#AD7F61'
        },
        title: 'Track Detail',
        headerTitleStyle: {
            color: 'white',
            fontWeight: 'bold'
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFFFFF',
    };
}

const styles = StyleSheet.create({
    map: {
        height: 450,
    },
    name: {
        fontSize: 25,
        borderWidth: 2,
        borderRadius: 25,
        textAlign: 'center',
        backgroundColor: '#ceb07a',
        width: '50%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F8F0D7'
    },
    mapContainer: {
        borderWidth: 10,
        borderRadius: 10,
        borderColor: '#AD7F61',
    }
}); 

export default TrackDetailScreen;