
import './App.css';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const[todos,setTodos]=useState([
    {
      title:"Apply For A Job",
      isDone:false
    },
    {
      title:"Wash Dishes",
      isDone:false
    },
    {
      title:"Do Laundry",
      isDone:true
    },]);
    const handleSubmit =function(event){
      event.preventDefault();
      const newTodos=[...todos,{title: title,isDone:false}];
      newTodos.sort((a,b)=>a.isDone-b.isDone);
      setTodos(newTodos);
      setTitle("");
    }
    const updateItem= function(event,index){
      const newTodos =[...todos];//copy of array
      newTodos[index].isDone=event.target.checked;
      newTodos.sort((a,b)=>a.isDone-b.isDone);
      setTodos(newTodos);
    }
    const deleteItem= function(event,index)
    {
      event.preventDefault();
      const newTodos =[...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
    }
  return (
    <div className="App">
     <h1>Todos</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" className='New-todo' placeholder='What You Need Todo?..' value={title} onChange={(e)=>setTitle(e.target.value)}  required/>
     </form>
     <ul className="App-todos">
       {todos.map((x,i)=>
       <li key={i} className={"Todo-item "+(x.isDone ? "Done":"Undone")}>
       <input type="checkbox" className="Todo-check" checked={x.isDone} onChange={(e)=>updateItem(e,i)}/>
         <span className="Todo-title">{x.title}</span>
         <a href="#" className="Todo-delete" onClick={(e)=>deleteItem(e,i)}>&times;</a> 
         </li>)}
     </ul>
    </div>
  );
};

export default App;


{
  //(e)=>updateItem(e,i) -> initiliaze a function
  //event.preventDefault(); -> prevents refresh of a page
}