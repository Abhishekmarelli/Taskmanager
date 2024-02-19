import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const ShowTask = ({tasks, settasks ,task ,settask}) => {

    const edittask =(id)=>{
        const selectedtask =tasks.find(todo => todo.id === id)

        settask(selectedtask);
    }

    const deletetask =(id)=>{

        const updatedtasklist = tasks.filter(ta => ta.id !== id );

        settasks(updatedtasklist);

    }
    
    return (
        <section className='showTask'>
            <div className='head'>
                <div>
                    <span className='title'>ToDo</span>
                    <span className='count'>{tasks.length}</span>

                </div>
                <button className='clearAll' onClick={()=>settasks([])}>Clear All</button>
            </div>

            <div>
                <ul>
                 {tasks.map((todo)=>(
                    <li key={todo.id}>
                        <p>
                            <span className='time'>{todo.time}</span>
                            <span className='name'>{todo.name}</span>
                        </p>
                        <i  onClick={()=>edittask(todo.id)}><FaEdit /></i>

                        <i onClick={()=>deletetask(todo.id)}><MdDelete /> </i>
                    </li>
                        
                        ))}
                </ul>
            </div>
        </section>
    )
}

export default ShowTask