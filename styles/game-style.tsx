import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    image:{
        width: '100%',
        height: '100%'
    },
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        backgroundColor:'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    questionBox:{
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 7,
        maxHeight: 93,
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 50
    },
    questionText:{
        marginLeft: 4,
        color: '#212529',
        fontStyle: 'italic',
        fontSize: 20
    },
    inputBox:{
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'white',
        width: '80%',
        //height: 40,
        textAlign: 'center',
        alignSelf: 'center',
        marginTop: "30%"
    },
    textImput:{
        textAlign: 'center',
        height: 40,
        fontSize: 20
    },
    levelText:{
        fontSize: 20
    }
})