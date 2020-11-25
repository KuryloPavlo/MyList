import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, MyList, Create, Customization, Skills, Name, ACH} from '../../view';

const Stack = createStackNavigator();

class Navigator extends React.PureComponent {
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name='Main'
                    component={Main}
                />
                <Stack.Screen
                    name='Name'
                    component={Name}
                />
                <Stack.Screen
                    name='Create'
                    component={Create}
                />
                <Stack.Screen
                    name='Customization'
                    component={Customization}
                />
                <Stack.Screen
                    name='Skills'
                    component={Skills}
                />
                <Stack.Screen
                    name='MyList'
                    component={MyList}
                />
                <Stack.Screen
                    name='ACH'
                    component={ACH}
                />
            </Stack.Navigator>
        )
    }
}

export default Navigator;