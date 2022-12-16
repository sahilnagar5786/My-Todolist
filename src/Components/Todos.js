import React from 'react'
import TodoItems from "./TodoItems"

const Todos = (props) => {
  return (
    <>
    <h1 className= 'bg-dark bg-gradient' style={{ color: 'white', margin: '65px 62px 10px 62px', marginTop: '70px' }}>TODOS LIST</h1>
    <div className="container my-3 text-light border border-dark margin: 0px 0px 0px 47px">
      {props.todos.length === 0 ? "SORRY!! NO TODO TO DISPLAY." :
        props.todos.map((todo) => {
          return (
          <> 
          <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr />
          </>
          )
        })
      }
    </div>
  </>
  )}


export default Todos