import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SkillBox from './components';
import styles from './styles';

class Skills extends React.PureComponent{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Choose your skills</Text>
                <View style={styles.skillContainer}>
                    <View style={styles.columContainer}>
                        <SkillBox title={'Acrobatics'}/>
                        <SkillBox title={'Animal Handling'}/>
                        <SkillBox title={'Arcana '}/>
                        <SkillBox title={'Athletics '}/>
                        <SkillBox title={'Deception '}/>
                        <SkillBox title={'History '}/>
                        <SkillBox title={'Insight '}/>
                        <SkillBox title={'Intimidation '}/>
                        <SkillBox title={'Investigation '}/>
                    </View>
                    <View style={styles.columContainer}>
                        <SkillBox title={'Medicine '}/>
                        <SkillBox title={'Nature '}/>
                        <SkillBox title={'Perception '}/>
                        <SkillBox title={'Performance  '}/>
                        <SkillBox title={'Persuasion  '}/>
                        <SkillBox title={'Religion  '}/>
                        <SkillBox title={'Sleight of Hand '}/>
                        <SkillBox title={'Stealth  '}/>
                        <SkillBox title={'Survival  '}/>
                    </View>
                </View>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.props.navigation.navigate('Create')}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Skills;