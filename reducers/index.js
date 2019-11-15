import {ADD_TODO, DELETE, COMPLETE, EDIT} from "../const/actionType"

let initState = []

const reducer=(state=initState,action)=> {
    switch (action.type) {
        case ADD_TODO:
          return state.concat(action.payload)
        case DELETE:
            return  state.filter(el=> el.key!==action.payload)
        case COMPLETE:
            return state.map(el=>
               ( el.key === action.payload) ? { ...el, isCompleted: !el.isCompleted } : el
              )
        case EDIT:
                    return state.map(el=> el.key === action.payload.key ? { ...el, edit: !el.edit, title:action.payload.title } : el)
           default:         
    return state 
    }
}
export default reducer