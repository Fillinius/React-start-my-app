import React, {useState} from "react"

const Counter=(props) =>{
 //console.log(props)
//const [value, setVavue] = useState(props.value)
const{value} = props

  const formatValue =()=>{
    return value === 0 ? "Empty" : value;
  }
  const getBadgeClass =()=>{
    let classes = "badge m-2 "
    classes+= value === 0 ? "bg-warning" : "bg-primary"
    return classes
  }

const handleIncrement=()=>{
  console.log("handleIncrement")
//setVavue((prevState)=>prevState + 1)
}

const handleDecrement=()=>{
  console.log("handleDecrement")
  //setVavue((prevState)=>prevState - 1)
  }
 
 /* const renderTags =() =>{
    return (
      tags.length !==0 &&
      tags.map((tag)=>{
        <li
        key={tag}
        className = "btn btn-primary btn-sm m-2"
        onClick = {()=> handleTag(tag)}
        >
        {tag}
        </li>
      })
    )
  }
*/

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClass()}>{formatValue()}</span>
      <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={()=>props.onIncrement(props.id)}>
        +
        </button>
        <button 
            className="btn btn-primary btn-sm m-2" 
            onClick={()=>props.onDecrement(props.id)}>
        -
        </button>
        <button 
            className="btn btn-danger btn-sm m-2" 
            onClick={()=>props.onDelete(props.id)}>delete</button> 
      </div>
    )
}

export default Counter