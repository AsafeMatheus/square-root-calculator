import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput,
    ImageBackground,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native'
import styles from '../styles/square-style'

export default function({navigation}:any){
    const [realNumber, setRealNumber] = useState('')
    const [number, setNumber] = useState('')

    function showAnswer(number:any){
        if (number.length > 0){
            return(
                <Text style={styles.answerText}>{Math.cbrt(Number(number)).toFixed(2)}</Text>
            )
        }
    }

    function showMethod(number: any){
        if(number.length > 0){
            let resultsOfDivisions = [{ id: '0', item: Number(number)}]
            let numbersToDivideForList = []
            let cubeRootOfNumber = Math.cbrt(Number(number))
        
            if(Number.isInteger(cubeRootOfNumber) == false){
                return(
                    <Text style={styles.noMethodText}>A raiz cúbica{'\n'} de {number} não é{'\n'} um número inteiro</Text>
                )
            } else{
                var numberThatWillBeDivided = Number(number)
                var numberToDivideFor = 2
                var resultOfDivision = 0.1
                var nextId = 1

                var keepDividing = true

                while (keepDividing == true){
                    resultOfDivision = numberThatWillBeDivided / numberToDivideFor
                    
                    if (Number.isInteger(resultOfDivision) == false){
                        numberToDivideFor += 1
                    } else{
                        resultsOfDivisions.push({id: String(nextId), item: resultOfDivision})
                        nextId += 1

                        numbersToDivideForList.push({id: String(nextId), item: numberToDivideFor})
                        numberThatWillBeDivided = resultOfDivision

                        if (resultOfDivision == 1){
                            keepDividing = false
                        } else{
                            numberToDivideFor = 2
                        }
                    }
                }

                return(
                    <View style={styles.showMethodConteiner}>
                        <FlatList
                            style={styles.flatListStyle}
                            data={resultsOfDivisions}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <Text style={styles.showMethodText}>{item.item}</Text>}
                        />
                        <View style={styles.lineToDivide}></View>
                        <FlatList
                            style={styles.flatListStyle}
                            data={numbersToDivideForList}
                            keyExtractor={item => item.id}
                            renderItem={({item}) => <Text style={styles.showMethodText}>{item.item}</Text>}
                        />
                    </View>
                )
            }
        }    
    }

    return(
        <View>
            <ImageBackground source={require('../assets/images/home-background.jpg')} style={styles.image}>
                <View style={styles.inputBox}>
                    <Text style={styles.label}>Número:</Text>
                    <TextInput
                        style={styles.textImput}
                        value={number}
                        onChangeText={text => {
                            setNumber(text)
                        }}
                    />
                </View>
                {showAnswer(realNumber)}
                {showMethod(realNumber)}
                <TouchableOpacity style={styles.touchableButton} onPress={() => {
                    setRealNumber(number)
                }}>
                    <Text style={styles.textButton}>Calcular</Text>
                </TouchableOpacity>
                
            </ImageBackground>
        </View>
    )
}