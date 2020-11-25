import React from 'react';
import {View,Text,TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

class ACH extends React.PureComponent {
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Last Step</Text>
                    <View style={styles.firstInput}>
                        <Text>Enter your Armor Class</Text>
                        <TextInput
                            placeholder='AC'
                        />
                    </View>
                    <View style={styles.secondInput}>
                        <Text>Enter your Health</Text>
                        <TextInput
                            placeholder='HP'
                        />
                    </View>
                    <View style={styles.thirdInput}>
                        <Text>Enter your Initiative</Text>
                        <TextInput
                            placeholder='Initiative'
                        />
                    </View>
                    <View style={styles.lastInput}>
                        <Text>Enter your Speed</Text>
                        <TextInput
                            placeholder='Speed'
                        />
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Main')}
                >
                    <Text>Done</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ACH;