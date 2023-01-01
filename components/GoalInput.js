import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(e) {
        setEnteredGoalText(e);
    };

    function addGoalHandler() {
        props.addHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Enter a goal...'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button
                            color='navy'
                            title='Cancel'
                            onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='salmon'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 5,
        width: '100%',
        padding: 8,
        backgroundColor: '#ccc',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        padding: 15,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        margin: 7,
        width: '40%',
    }
});