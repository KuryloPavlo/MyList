import React from 'react';
import {View,Text,Image} from 'react-native';
import styles from './styles';
import {BarbarianICN, BorderICN, HealthICN, ArmorICN} from '../../../assets';

import Border from '../Border';

class Character extends React.PureComponent{
    render(){
        return(
            <View style={styles.firstContainer}>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.classContainer}>
                            <Image 
                                source={BarbarianICN}
                                style={styles.classImg}
                            />
                            <View style={styles.nameContainer}>
                                <Text style={styles.nameText}>Izek Bronfor</Text>
                                <Text style={styles.classText}>Barbarian</Text>
                                <Text style={styles.lvlText}>5 LEVEL</Text>
                            </View>
                        </View>
                        <View style={styles.powerContainer}>
                            <Border source={ArmorICN} title={'AC'} point={16}/>
                            <Border source={HealthICN} title={'HP'} point={50}/>
                            <Border source={BorderICN} title={'IN'} point={'+1'}/>
                            <Border source={BorderICN} title={'SP'} point={30}
                            />
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.titleText}>Skills</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <Border source={BorderICN} title={'STR'} point={'+5'}/>
                            <Border source={BorderICN} title={'DEX'} point={'+1'}/>
                            <Border source={BorderICN} title={'CON'} point={'+4'}/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30}}>
                            <Border source={BorderICN} title={'INT'} point={'-1'}/>
                            <Border source={BorderICN} title={'WIS'} point={'0'}/>
                            <Border source={BorderICN} title={'CHA'} point={'-1'}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Character;