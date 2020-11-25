import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {Character} from '../../components';

class MyList extends React.PureComponent{
    render(){
        
        return(
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
                <Character/>
                <Character/>
            </ScrollView>
        )
    }
}

export default MyList;