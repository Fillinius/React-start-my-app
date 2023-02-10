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

  const handleIncrement =(id)=>{
    const newValueIncrement = counters.map(val=>{
      if(id===val.id){
        let{id,value, name}= val
          let newVal = val
            newVal ={id:id, value: value+1, name}
              return newVal
      } return val
   })
     setCounters(newValueIncrement)
  }
// Мой вариант решения
/*
  const handleDecrement =(id)=>{
    const newValueDecrement = counters.map(val=>{
      if(id===val.id){
        let{id,value, name}= val
          let newVal = val
            newVal ={id:id, value: value-1, name}
              return newVal
      } return val
   })
     setCounters(newValueDecrement)
  }
  */
 // Лучший вариант решения
 const handleDecrement = (id) => {
  const newCount = counters.map(item => ({ // map возвращает сразу новый обьект, в котором по условию меняем value на единичку
    ...item, // на этой строке разворячиваем в итоговый обьектостальные ключи
    value: item.id === id ? item.value + 1 : item.value // а этот меняем
    
  }))
 setCounters(newCount)
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
      </>
  )
}


export default CountersList