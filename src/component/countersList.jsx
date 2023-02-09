import React, {useState} from "react";
import Counter from "./counter";

const CountersList =() =>{
  const initionalState = [
    {id:0, value:0, name:"ненужная вещь"},
    {id:1, value:4, name:"вилка"},
    {id:2, value:0, name:"ложка"},
    {id:3, value:0, name:"тарелка"},
    {id:4, value:0, name:"набор минималиста"},
  ]

  const [counters, setCounters ]= useState(initionalState)

  const handleDelete = (id)=>{
    const newCounters = counters.filter(item=>item.id!==id)
      setCounters(newCounters);
  }
  const handleReset =()=>{
    setCounters(initionalState)
    console.log('Reset')
  } 
  const handleUpdate =()=>{
    const updateState = [
      {id:0, value:1, name:"ненужная вещь"},
      {id:1, value:0, name:"вилка"},
      {id:2, value:2, name:"ложка"},
      {id:3, value:3, name:"тарелка"},
      {id:4, value:4, name:"набор минималиста"},
    ]
    setCounters(updateState)
  }
  const handleIncrement =(id)=>{
    
    const newValueIncrement = initionalState.map(val=>{
      if(id===val.id){
        let{id,value, name}= val
          let newVal = val
            newVal ={id:id, value: value+1, name}
              return newVal
      } return val
   })
   console.log('newValueIncrement', newValueIncrement)
     setCounters(newValueIncrement)
       

  }
  const handleDecrement =(id)=>{
    console.log("Dec")
  }
  return (
      <>
        {counters.map(count=>(
          <Counter key={count.id} 
                    onDelete = {handleDelete}
                    onIncrement = {handleIncrement}
                    onDecrement = {handleDecrement}
                    {...count}>
          </Counter>
        ))}
        <button 
            className="btn btn-primary btn-sm m-2"
           
            onClick={handleUpdate}
            
            >
              Сброс
        </button>
              </>
  )
}


export default CountersList