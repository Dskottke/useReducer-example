import {AppAction, AppState} from "./Model";
import {CLEAR_LIST, REMOVE_STUDENT, RESET_LIST} from "./Action";
import {data} from "./Data";

//Method for reducer
const reducerMethod = (state: AppState, action: AppAction) => {
    switch (action.type) {
        case REMOVE_STUDENT : {
            return {...state, students: state.students.filter(student => student.id !== action.payload)}
        }
        case RESET_LIST : {
            return {...state, students: data}
        }
        case CLEAR_LIST : {
            return {...state, students: []}
        }
        default:
            return state
    }
}
export default reducerMethod;
