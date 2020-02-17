import {ADD_LIST,DELETE_LIST,EDIT_LIST} from './ActionType'
export const addNewTask=(newtask)=>(
    {type:ADD_LIST,
     payload:{newtask}}
)
export const deleteTask=(id)=>(
    {type:DELETE_LIST,
     payload:id}
)

export const editTask=(id,newValue)=>(
    {
        type:EDIT_LIST,
        payload:{id,newValue}
    }
)