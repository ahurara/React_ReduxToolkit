import './App.css'
import {useDispatch,useSelector} from 'react-redux'
import {fetchTodos} from '../redux/slice/todo'

function App() {

  const dispatch =useDispatch();
  const todos = useSelector(state => state.todo.data);
  const isLoading = useSelector(state => state.todo.isLoading);
  const isError = useSelector(state => state.todo.isError);
  
  return (
    <>
        <div>
        <h1>Hello world</h1>
          <button onClick={e=>dispatch(fetchTodos())}>
            Fetch Todo
          </button>
          {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching todos.</p>}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default App
