import {StyleSheet, Dimensions} from 'react-native';
const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    firstContainer: {
        flex: 1,
        width: screenWidth,
        padding: 20,
    },  
    container:{
        flex: 1,
    },
    topContainer: {
        flex: 1,
        backgroundColor: '#A92400',
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    titleText: {
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'serif',
        alignSelf: 'center',
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#E39802',
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
    },
    nameContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50        
    },
    lvlText: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'serif',
        fontWeight: 'bold',
    },
    classText: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'serif',
        marginVertical: 20,
    },
    nameText: {
        color: 'white',
        fontSize: 26,
        fontFamily: 'serif'
    },
    classImg: {
        marginTop: 40,
        marginRight: 20,
    },
    classContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    powerContainer: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    }

})

export default styles;