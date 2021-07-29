import React from 'react'

export const Todo = ({ todo, onDelete }) => {
    return (
        <div>
            <h4 className="mx-3">{todo.desc}</h4>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
