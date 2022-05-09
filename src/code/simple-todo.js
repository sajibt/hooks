import { useReducer } from "react";



function App() {
  return (
    <div className="App">
      <h1> I love you mow </h1>
      <Todos />
    </div>
  );
}

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];
// The useReducer Hook accepts two arguments.
// const [state, dispatch] = useReducer(first, second, third)
// The reducer function contains your custom state logic and the 
// initialStatecan be a simple value but generally will contain an object.
// state -> reducer ( state -> state.map(todo) , action  ) state = todos 

// state can acces initial Json or any other obj . initials.> state -> Array.map -> 


const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETED":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo
        }
      })
    default:
      return state;
  }

}

function Todos() {
  //The useReducer Hook returns the current state and a dispatch method.
  // useReducer(<reducer>(state), <initialState>(obj/Json))
  // state === reducer is completely separate function . it contains the logic of current state . 

  //  const [state, dispatch]  it is todos name set todos 

  const [todos, dispatch] = useReducer(reducer, initialTodos);

  //dipatch needs action.type name and other  refurbished  map array name
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETED", id: todo.id })
  }
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
          <label>

            <input
              type="checkbox"
              checked={todo.complete}
              onChange={()=>handleComplete(todo)}
            />

            {todo.title}

            </label>

        </div>
        )

      })}

    </>

  )
}

export default App;
