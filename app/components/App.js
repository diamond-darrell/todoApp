import React, { View, Text, StyleSheet } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFDC73'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center'
  }
})

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Todo App</Text>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)

export default App
