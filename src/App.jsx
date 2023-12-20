import { useSelector , useDispatch } from '@reduxjs/toolkit'
import { increment ,decrement } from './redux/counterSlice'
import state from './redux/counterSlice'
import './App.css'


function App() {


  const counter = useSelector(() => state.counter.value)
const dispatch = useDispatch();
  return (
    <div className='App'>

     <div className='counter' >
      <button id='decrement'
      onClick={() => dispatch(decrement())}
      >-</button>
      <div className='count'>{counter}</div>
      <button id='increcment'
       onClick={() => dispatch(increment())}
      >+</button>
     </div>



    </div>
  )
}

export default App
