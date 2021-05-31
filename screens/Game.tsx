import React, {useState} from 'react'
import {
    Text,
    View,
    ImageBackground,
    TextInput,
    Button
} from 'react-native'
import styles from '../styles/game-style'

export default function(){
    const [randomNumberState, setRandomNumberState] = useState(generateRandomNumber)
    const [level, setLevel] = useState(1)
    const [answer, setAnswer] = useState('')

    function generateRandomNumber(){
        var randomNumber = Math.floor(Math.random() * 201)
        
        var stopLooping = false
        while (stopLooping = true){
            if (Number.isInteger(Math.sqrt(randomNumber)) == true){
                return randomNumber
                //randomNumber
            } else{
                randomNumber = Math.floor(Math.random() * 201)
            }
        }
    }

    return(
        <ImageBackground source={require('../assets/images/home-background.jpg')} style={styles.image}>
            <View style={styles.questionBox}>
                <View style={styles.circle}>
                    <Text style={styles.levelText}>{level}</Text>
                </View>
                <Text style={styles.questionText}>Qual é raiz quadrada de {randomNumberState}?</Text>
            </View>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.textImput}
                    value={answer}
                    onChangeText={text => {
                        setAnswer(text)
                    }}
                />
                <Button
                    title='>>>'
                    onPress={() => {
                        let attempt = answer

                        if (Number(attempt) == Math.sqrt(Number(randomNumberState))){
                            setLevel(level+1)
                            setRandomNumberState(generateRandomNumber)
                        }
                    }}
                />
            </View>
        </ImageBackground>
    )
}