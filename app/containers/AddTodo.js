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
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
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
        <Text style={styles.buttonText}>Add Todo</Text>
      </TouchableHighlight>
    </View>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
