import React from 'react';
import {View, Text, KeyboardAvoidingView, Platform} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Charasteristic} from './components';
import styles from './styles';

class Create extends React.PureComponent{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.textContainer}>
                    <Text style={styles.textHead}>Standart numbers</Text>
                    <Text style={styles.textNumb}>8, 10, 12, 13, 14, 15</Text>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.textHead}>Enter your numbers</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.charContainer}>
                            <Charasteristic title='STR'/>
                            <Charasteristic title='DEX'/>
                            <Charasteristic title='CONST'/>
                        </View>
                        <View style={styles.charContainer}>
                            <Charasteristic title='INT'/>
                            <Charasteristic title='WISD'/>
                            <Charasteristic title='CHAR'/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('ACH')}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Create;