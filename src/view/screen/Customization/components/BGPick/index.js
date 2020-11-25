import React, {useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';


const BGPick = () => {
    const [selectedValue, setSelectedValue] = useState('-');

    return(
        <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Charlatan' value='Charlatan' />
        <Picker.Item label='Criminal' value='Criminal' />
        <Picker.Item label='Entertainer' value='Entertainer' />
        <Picker.Item label='Folk Hero' value='Folk Hero' />
        <Picker.Item label='Guild Artisan' value='Guild Artisan' />
        <Picker.Item label='Hermit' value='Hermit' />
        <Picker.Item label='Outlander' value='Outlander' />
        <Picker.Item label='Noble' value='Noble' />
        <Picker.Item label='Sage' value='Sage'/>
        <Picker.Item label='Sailor' value='Sailor'/>
        <Picker.Item label='Soldier' value='Soldier'/>
        <Picker.Item label='Urchin' value='Urchin'/>
      </Picker>
    </View>
    )
}

export default BGPick;