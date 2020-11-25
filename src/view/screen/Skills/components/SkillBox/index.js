import React from 'react';
import {View,Text, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';

class SkillBox extends React.PureComponent {
    state={
        selected: false
    }

    render(){
        const { selected } = this.state;
        const { title } = this.props;
        return(
            <View>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={selected}
                    onValueChange={() => this.setState({selected: !selected})}
                    style={styles.checkbox}
                    tintColors={{true: '#A92400', false: 'black'}}
                    />
                    <Text style={styles.label}>{title}</Text>
                </View>
            </View>
        ) 
    }
}

export default SkillBox;