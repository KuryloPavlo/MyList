import { Picker } from '@react-native-community/picker';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent:'space-around',
    },
    pickContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#A92400',
        paddingVertical: 10,
        marginHorizontal: 55
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    button: {
        marginBottom: 80,
        paddingVertical: 20,
        backgroundColor: '#A92400',
        alignItems: 'center',
        marginHorizontal: 55,
        borderRadius: 10,
    },
    text:{
        marginLeft: 60,
        fontSize: 22,
    }
})

export default styles;