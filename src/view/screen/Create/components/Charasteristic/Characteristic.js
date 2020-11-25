import React from 'react';
import { View, Text, TextInput,} from 'react-native';
import styles from './styles';

class Characteristic extends React.PureComponent {
    render() {
        const { title } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <TextInput style={styles.textInput} placeholder={'Number'} />
            </View>
        )
    }
}

export default Characteristic;