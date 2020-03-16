import '../_mockLocation';
import React, {useContext, useCallback} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import Map from '../components/Map';
import useLocation from '../hooks/useLocation';
import {Context as LocationContext} from '../context/LocationContext';
import {withNavigationFocus} from 'react-navigation';
import TrackForm from '../components/TrackForm';
import Icon from 'react-native-vector-icons/AntDesign';

const TrackCreateScreen = ({isFocused}) => {

    const {addLocation, state} = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, state.recording);
    }, [state.recording]);

    const [err] = useLocation(isFocused || state.recording, callback); 

    return (
        <ScrollView style = {styles.container}>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm/>
        </ScrollView>
    )
}

TrackCreateScreen.navigationOptions = () => {
    return {
        title: 'Track Create',
        tabBarIcon: ({tintColor}) => <Icon name = 'plus' size = {30} color = {tintColor}/>
    };
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F0D7'
    }
});

export default withNavigationFocus(TrackCreateScreen);