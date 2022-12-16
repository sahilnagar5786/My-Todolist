import React from 'react'
import { useState } from 'react';
// import PropTypes from 'prop-types'



const AddTodo = (props) => {
     const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    
    const submit=(e)=>{
      e.preventDefault(); 
      if(!title || !desc){
        alert("Title or Description cannot be blank.")
      }else{
       props.addTodo(title, desc);
       setTitle("");
       setDesc(""); 
    }
}

    return (
        <div>  
             <h1 className='bg-dark bg-gradient' style={{ color: 'white', margin: '65px 62px 10px 62px', marginTop: '70px' }}>ADD A NEW TODO</h1>
            <div className="container border border-dark  margin: 0px 0px 0px 47px">
                <form className="my-3" onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label text-light"><h5>ENTER TODO TITLE</h5></label>
                        <input type="text" value={title}  onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label text-light"><h5>ENTER TODO DESRIPTION</h5></label>
                        <input type="text" value={desc}   onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">ADD TODO</button>
                </form>
            </div>

        </div>
    )
}

export default AddTodo
