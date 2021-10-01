import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import { Welcome } from '../screens/Welcome';
import { UserIdentification } from '../screens/UserIdentification';
import { Confirmation } from '../screens/Confirmation';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: colors.white
      },
    }}
  >
    <stackRoutes.Screen 
      name='Welcome'
      component={Welcome}
    />
    <stackRoutes.Screen 
      name='UserIdentification'
      component={UserIdentification}
    />
    <stackRoutes.Screen 
      name='Confirmation'
      component={Confirmation}
    />
  </stackRoutes.Navigator>
);

export default AppRoutes;