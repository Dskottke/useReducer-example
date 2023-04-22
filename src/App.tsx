import {useReducer} from 'react'
import './App.css'
import {data} from "./Data";

import {CLEAR_LIST, REMOVE_STUDENT, RESET_LIST} from "./Action";
import reducerMethod from "./Reducer";

function App() {

//Default state for useReducer
    const defaultState = {
        students: data,
        counter: 0,
    }

    const [state, dispatch] = useReducer(reducerMethod, defaultState)

    const removeStudent = (id: number) => {
        dispatch({type: REMOVE_STUDENT, payload: id})
    }

    const resetList = () => {
        dispatch({type: RESET_LIST})
    }

    const clearList = () => {
        dispatch({type: CLEAR_LIST})
    }

    return (
        <div className="App">
            {state.students.map((student) => {
                const {id, name} = student;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => removeStudent(id)}>remove</button>
                    </div>
                );
            })}
            {state.students.length < 1 ? (
                <button
                    style={{marginTop: '2rem'}}
                    onClick={resetList}
                >
                    reset
                </button>
            ) : (
                <button
                    style={{marginTop: '2rem'}}
                    onClick={clearList}
                >
                    clear
                </button>
            )}
        </div>
    )
}

export default App
