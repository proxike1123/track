import 'react-native-gesture-handler';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
  AccountScreen, 
  TrackCreateScreen, 
  TrackDetailScreen, 
  TrackListScreen, 
  SigninScreen, 
  SignupScreen,
  LoadingScreen
} from './src/screens';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import Icon  from 'react-native-vector-icons/Feather';

const switchNavigator = createSwitchNavigator({
  loading: LoadingScreen,
  loginFlow: createStackNavigator({
    signup: SignupScreen,
    signin: SigninScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: {
      screen: createStackNavigator({
        trackList: TrackListScreen,
        trackDetail: TrackDetailScreen,
      }),
      navigationOptions: () => {
        return {
          title: 'Track List',
          tabBarIcon: ({tintColor}) => <Icon name = 'list' size = {30} color = {tintColor}/>
        }
      }
    },
    trackCreate: TrackCreateScreen,
    account: AccountScreen,
  }, 
  {
    tabBarOptions: {
      activeTintColor: 'orange',
    }
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref = { (navigator) => {setNavigator(navigator)}}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};