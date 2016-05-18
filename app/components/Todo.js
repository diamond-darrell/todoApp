import React, { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'react'

const styles = StyleSheet.create({
  todo: {
    marginBottom: 10,
    borderWidth: 1,
    fontSize: 20
  }
})


const Todo = ({ onPress, completed, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
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
