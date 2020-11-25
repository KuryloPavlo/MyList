import React from 'react';
import {View,TouchableOpacity,Text,Image} from 'react-native';
import styles from './styles';

import {DiceICN} from '../../../assets';

class Main extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Image
                        source={DiceICN}
                        style={styles.img}
                    />
                    <Text style={styles.text}>Char List</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Name')}
                    >
                        <Text>Create Character</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('MyList')}
                    >
                        <Text>My List</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Main;