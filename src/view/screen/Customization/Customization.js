import React from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {RacePick, ClassPick, BGPick} from './components';
import styles from './styles';

class Customization extends React.PureComponent{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.text}>Customizate your character</Text>
                    <View style={styles.pickContainer}>
                        <Text>Race</Text>
                        <RacePick/>
                    </View>
                    <View style={styles.pickContainer}>
                        <Text>Class</Text>
                        <ClassPick/>
                    </View>
                    <View style={styles.pickContainer}>
                        <Text>Background</Text>
                        <BGPick/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Skills')}
                    >
                        <Text>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Customization;