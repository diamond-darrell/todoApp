import React, {
  View,
  TextInput,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

const styles = StyleSheet.create({
  button: {
    color: '#FFDC73',
    backgroundColor: '#033E6B',
    margin: 10,
    borderWidth: 1
  }
})

let AddTodo = ({ dispatch }) => {
  const onPress = () => {dispatch(addTodo(input))}
  const setInputText = (text) => {input = text}

  let input = ''

  return (
    <View>
      <TextInput onChangeText={text => setInputText(text)}/>
      <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text>Add Todo</Text>
      </TouchableHighlight>
    </View>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
