import React from 'react'


const TodoItems =  ({todo, onDelete}) => {
    return (
        <div>
            <h4 className='text-light'>{todo.title}</h4>
            <p className='text-light'>{todo.desc}</p>
            <button className="btn btn-sm btn-success" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}

export default TodoItems