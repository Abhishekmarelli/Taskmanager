import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

import { useEffect, useState } from 'react';

function App() {

  const [tasklist ,settasklist] = useState(JSON.parse(localStorage.getItem("tasklist"))||[])
  const[task ,settask] =useState({})

  useEffect(()=>{
    localStorage.setItem("tasklist",JSON.stringify(tasklist))
  },[tasklist])
  return (
    <div className="App">
      <Header/>
      <AddTask tasks={tasklist} settasks={settasklist} task={task} settask={settask}/>
      <ShowTask tasks={tasklist} settasks={settasklist} task={task} settask={settask}/>
    </div>
  );
}

export default App;
