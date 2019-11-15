import {ADD_TODO, DELETE, COMPLETE, EDIT} from "../const/actionType"

export const addtodo = (payload)=> {
    return{
    type: ADD_TODO,
    payload
    };
};

export const deletetodo = (payload)=> {
    return{
    type: DELETE,
    payload
    }
}
export const complete = (payload)=> {
    return{
    type: COMPLETE ,
    payload
    }
}

export const edit = (payload) => {
    return{
        type: EDIT ,
        payload
    }
}

