import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';

class Border extends React.PureComponent{
    render(){
        const {title, source, point} = this.props;
        return(
            <View style={styles.title}>
                <Image
                    source={source}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.pointText}>{point}</Text>
                </View>
            </View>
        )
    }
}

export default Border;