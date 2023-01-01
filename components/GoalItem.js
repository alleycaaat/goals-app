import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalOutput}>
            <Pressable
                android_ripple={{ color: '#ddd' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItem}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalOutput: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: 'purple',
    },
    pressedItem: {
        opacity: 0.5
    },
    goalItem: {
        color: 'white',
        padding: 5,
    }
});