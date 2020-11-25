import React from 'react';
import {Dimensions, ScrollView, View, TouchableOpacity, Image, Text} from 'react-native';

import styles from './styles';
import {Character} from '../../components';
import {ArrowBackICN} from '../../../assets';

class MyList extends React.PureComponent{
    render(){
        
        return(
            <View style={{flex: 1}}>
                <View style={styles.navigationContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Image 
                            source={ArrowBackICN}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>My Character List</Text>
                </View>
                <ScrollView 
                    style={{flex: 1}} 
                    horizontal
                    snapToInterval={Dimensions.get('screen').width}
                    snapToAlignment='center'
                >
                    <Character/>
                    <Character/>
                    <Character/>
                    <Character/>
                    <Character/>
                </ScrollView>
            </View>
        )
    }
}

export default MyList;