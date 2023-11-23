import React, { useState } from 'react'

const App = () => {
    const[todo,setTodo] = useState('');
    const [cnt,setCnt] = useState(0);
    const[memodata,setMemodata]= useState([]);
    function handleClick(){
        var data = document.getElementById('memo-key');
        if(data.value.length>5){
            var arr= memodata;
            arr.push(data.value)
            setMemodata( arr)
        }
        console.log(memodata)
    }
   return (
    <div>
        <h1>React.useMemo</h1>
        <div className='todo'>
         <p>{todo}</p>
        <button id='addTodo' onClick={()=>setTodo('New Todo')}>Add Todo</button>
        </div>
        <hr></hr>
        <div className='countnum'>
         <label>`count:${cnt}`</label>
         <button onClick={()=> setCnt(cnt+1)}>+</button>
         <h2>Expensive Calculation</h2>
         <p>1000000000</p>
        </div>
        <hr></hr>
        <hr></hr>
       <div className='memo'>
       <input id='memo-key'/>
       <button onClick={handleClick}> Add Skill</button>
     
        
      
       </div>
    </div>
  )
}

export default App