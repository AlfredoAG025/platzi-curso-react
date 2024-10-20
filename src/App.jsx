import { useEffect, useState } from 'react'
import './App.css'
import { TodoItem } from './components/TodoItem'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { CreateTodoButton } from './components/CreateTodoButton'

const defaultTodos = [
  { id: 1, text: 'Make a videogame', completed: true },
  { id: 2, text: 'Programming in C#', completed: false },
]

function App() {

  const [todos, setTodos] = useState(defaultTodos);

  const toggleCompleteTodo = (todoId) => {
    const newTodos = todos.map(t => {
      if (t.id === todoId){
        t.completed = !t.completed;
      }
      return t;
    })

    setTodos(newTodos);
  }

  return (
    <>
      <div className='container mx-auto space-y-4 mt-10'>
        <TodoCounter completed={3} total={5} />

        <div className='flex gap-6'>
          <TodoSearch />
          <CreateTodoButton />
        </div>

        <TodoList>
          {todos.map(item => <TodoItem key={item.id} text={item.text} completed={item.completed} toggleCompleteTodo={() => toggleCompleteTodo(item.id)} />)}
        </TodoList>


      </div>
    </>
  )
}

export default App
