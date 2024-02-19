import React from 'react'

const AddTask = ({tasks ,settasks ,task ,settask}) => {
  const hanldesubmit = (e)=>{
    const date =new Date();
    e.preventDefault();

    if(task.id){

      const editedtask = tasks.map((todo)=>(

        todo.id === task.id ? {id:task.id,name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleTimeString()}`}:todo
      ))
      settasks(editedtask)
      settask({})

    }
    else{
      
      const newtask ={id: date.getTime(),name:`${e.target.task.value}`,time:`${date.toLocaleTimeString()} ${date.toLocaleTimeString()}`}
  
      settasks([...tasks ,newtask]);
  
      settask({})
    }
   

  }

  return (
    <div className='addTask'>
    <form onSubmit={hanldesubmit} >
        <input type='text' placeholder='Add Task' autoComplete='off' name='task' value={task.name || ""} onChange={(e)=>settask({...task,name:e.target.value})}/>
        <button type='submit'>{ task.id ? "UPDATE": "ADD"}</button>
    </form>
    </div>
  )
}

export default AddTask