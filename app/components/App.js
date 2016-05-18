import React, { View, StyleSheet } from 'react-native'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFDC73'
  }
})

const App = () => (
  <View style={styles.container}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </View>
)

export default App
