import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        paddingVertical: 20,
        marginHorizontal: 100,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#A92400',
        borderRadius: 10,

    },
    textContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#A92400'
    },
    img: {
        width: 120,
        height: 120,
    }
})

export default styles;