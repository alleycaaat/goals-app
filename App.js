import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function beginAddGoal() {
    setModalVisible(true);
  }

  function endAddGoal() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
    setModalVisible(false);
  };

  function deleteGoalHandler(key) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== key);
    });
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='purple'
          visible={modalVisible}
          onPress={beginAddGoal}
        />
        <GoalInput
          visible={modalVisible}
          addHandler={addGoalHandler}
          onCancel={endAddGoal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'lavender',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  },

});
