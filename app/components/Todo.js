import React, { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'react'

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  complete: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000'
  }
})


const Todo = ({ onPress, completed, text }) => (
  <TouchableOpacity style={styles.todo} onPress={onPress}>
    <Text style={completed ? styles.complete : ''}>
      {text}
    </Text>
  </TouchableOpacity>
)

Todo.propTypes = {
  onPress: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
