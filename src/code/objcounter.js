import React, { useReducer } from 'react'

export default function App() {
    return (

        <div>
            <strong> I love you mow </strong>
            <Counter />
        </div>
    )
}

//state as a object 

// counter in usestate 
// function Counter() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <div> count: {count} </div>
//       <button type='button' onClick={() => { setCount(count + 1) }}> Increment   </button>
//       <button type='button' onClick={() => { setCount(count - 1) }}>  Decrement  </button>
//     </div>
//   )
// }

const initialState = {
    counter: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { counter: state.counter + 1 }
        case "DECREMENT":
            return { counter: state.counter - 1 }
        default:
            return state
    }
}

function Counter() {

    //here we found current state as a count and  collection of state as a dispatch(setstate)
    const [count, dispatch] = useReducer(reducer, initialState)
    const increment = () => {
        dispatch({ type: "INCREMENT" })
    }
    const decrement = () => {
        dispatch({ type: "DECREMENT" })
    }

    return (

        <div>
            <div> count: {count.counter}</div>
            <button type='button' onClick={increment} > Increment   </button>
            <button type='button' onClick={decrement} > Decrement  </button>
        </div>
    )

}