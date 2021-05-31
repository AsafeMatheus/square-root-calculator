import React from 'react'
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    StatusBar,
    TouchableHighlight,

} from 'react-native'
import styles from '../styles/home-style'

export default function({navigation}:any){
    return(
        <View>
            <StatusBar hidden={true} />
            <ImageBackground source={require('../assets/images/home-background.jpg')} style={styles.image}>
                <View style={styles.buttonsConteiner}>
                    <TouchableOpacity style={styles.buttons} onPress={() => {
                        navigation.navigate('Square')
                    }}>
                        <Text style={styles.text}>Raiz Quadrada</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => {
                        navigation.navigate('Cube')
                    }}>
                        <Text style={styles.text}>Raiz Cúbica</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={() => {
                        navigation.navigate('Game')
                    }}>
                        <Text style={styles.text}>Jogar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}