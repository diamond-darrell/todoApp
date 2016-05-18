import React, { ListView } from 'react-native'
import { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoPress }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  todos = ds.cloneWithRows(todos)

  return <ListView
    dataSource={todos}
    renderRow={todo =>
      <Todo
        key={todo.id}
        {...todo}
        onPress={() => onTodoPress(todo.id)}
      />
    }
  />
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoPress: PropTypes.func.isRequired
}

export default TodoList
