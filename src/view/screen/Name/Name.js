import React from 'react';
import {View, Text} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

class Name extends React.PureComponent{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.text}>Enter a name</Text>
                        <View style={styles.nameInputContainer}>
                            <TextInput
                                placeholder={'Name'}
                            />
                        </View>
                    </View>
                    <View style={styles.lastNameContainer}>
                        <Text style={styles.text}>Enter the last name</Text>
                        <View style={styles.lastNInputContainer}>
                            <TextInput
                                placeholder={'Last Name'}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Customization')}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Name;