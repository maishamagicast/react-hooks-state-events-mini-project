import React from "react";
import { useState } from 'react';


function NewTaskForm({ categories, onTaskFormSubmit }) {
 const[text, setText]=useState('');
 const [category,setCategory]=useState('Code');
 
 function handleSubmit(e){
  e.preventDefault();
  const newTask={
    text: text,
    category: category
  }

  onTaskFormSubmit(newTask);

  setText('');
  setCategory('Code');

 }



  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name={text} onChange={(e)=>setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        
        >
          {/* render <option> elements for each category here */}
          {categories.filter((category)=> category !== 'All')
          .map((category)=>{
            return(
              <option key={category} value={category}>
                {category}
              </option>
            )
          })}
           
        </select>
      </label>
      <input type="submit" value='Add Task' />
    </form>
  );
}

export default NewTaskForm;
