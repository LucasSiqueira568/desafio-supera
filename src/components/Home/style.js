import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10002b'
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    containerCategory: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        width: 110,
        height: 60,
        backgroundColor: '#240046',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    categoryText: {
        color: 'white',
        fontSize: 17
    },

    containerImage: {
        width: '100%',
        height: 500,
        // backgroundColor: 'red',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    productsImage: {
        width: 160,
        height: 200,
        // marginRight: 10,
        // marginBottom: 10,
        // marginLeft: 10,
        margin: 10,
        borderRadius: 10

    }
})

export default styles;