import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';


const RacePick = () => {
    const [selectedValue, setSelectedValue] = useState('-');

    return(
        <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='DragonBorn' value='DragonBorn' />
        <Picker.Item label='Dwarf' value='Dwarf' />
        <Picker.Item label='Elf' value='Elf' />
        <Picker.Item label='Gnome' value='Gnome' />
        <Picker.Item label='Half-elf' value='Half-elf' />
        <Picker.Item label='Halfling' value='Halfling' />
        <Picker.Item label='Half-orc' value='Half-orc' />
        <Picker.Item label='Human' value='Human' />
        <Picker.Item label='Tiefling' value='Tiefling'/>
      </Picker>
    </View>
    )
}

export default RacePick;