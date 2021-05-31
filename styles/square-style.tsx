import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    image:{
        width: '100%',
        height: '100%'
    },
    textImput:{
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        height: 33,
        width: '65%',
        marginLeft: 5,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 5
    },
    label:{
        fontSize: 25
    },
    inputBox:{
        flex: 1,
        flexDirection: 'row',
        padding: 18
    },
    answerText:{
        textAlign: 'center',
        marginBottom: 80,
        color: '#ae2012',
        fontSize: 30
    },
    noMethodText:{
        color: '#f48c06',
        marginBottom: '40%',
        textAlign: 'center',
        fontSize: 25
    },
    showMethodConteiner:{
        flex: 1,
        flexDirection: 'row',
        width: 80,
        alignSelf: 'center',
        marginBottom: 180
    },
    lineToDivide:{
        backgroundColor: 'black',
        height: 280,
        width: 1,
        marginHorizontal: 5
    },
    showMethodText:{
        fontSize: 30
    },
    flatListStyle:{
        height: 280
    },
    touchableButton:{
        backgroundColor: '#219ebc',
        alignItems: 'center',
        padding: 18
    },
    textButton:{
        color: 'white',
        fontSize: 20
    }
})