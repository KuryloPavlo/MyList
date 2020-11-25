import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';


const ClassPick = () => {
    const [selectedValue, setSelectedValue] = useState('-');

    return(
        <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Barbarian' value='Barbarian' />
        <Picker.Item label='Bard' value='Bard' />
        <Picker.Item label='Cleric' value='Cleric' />
        <Picker.Item label='Druid' value='Druid' />
        <Picker.Item label='Fighter' value='Fighter' />
        <Picker.Item label='Monk' value='Monk' />
        <Picker.Item label='Paladin' value='Paladin' />
        <Picker.Item label='Ranger' value='Ranger' />
        <Picker.Item label='Rogue' value='Rogue'/>
        <Picker.Item label='Sorcerer' value='Sorcerer'/>
        <Picker.Item label='Warlock' value='Warlock'/>
        <Picker.Item label='Wizard' value='Wizard'/>
      </Picker>
    </View>
    )
}

export default ClassPick;