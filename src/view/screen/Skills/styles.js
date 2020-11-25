import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    skillContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        borderColor: '#A92400',
        borderRadius: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    columContainer: {
        alignItems: 'flex-start',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 24,
        marginTop: 25,
        marginBottom: 50
    },
    buttonContainer: {
        marginTop: 250,
        paddingVertical: 20,
        backgroundColor: '#A92400',
        alignItems: 'center',
        paddingHorizontal: 135,
        borderRadius: 10,
    }
})

export default styles;