import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/header/index.jsx'
import MainSection from '../main_section/container.jsx'

const App = ({ todos, actions, addTodo, saveTodo }) => (
  <div>
    <Header addTodo={addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
)

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object
}

App.defaultProps = {
  actions: {}
}

export default App;