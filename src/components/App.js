import React from "react";
import { useState } from 'react';
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
   const [selectedCategory, setSelectedCategory]=useState('All');
   const [taskList, setTaskList]=useState(TASKS);
    

   // filter tasks based on selected category 
   const filterTasks = selectedCategory === 'All' ? 
    taskList : taskList.filter((task)=>
      task.category === selectedCategory)
    
  
    function onCategoryChange(category){
      setSelectedCategory(category); 
    }



    function handleDeleteTask(taskText){
      
      setTaskList((prevTaskList)=>{
        return prevTaskList.filter ((task)=> task.text !== taskText)
      })
    }


    function handleAddTask(newTask){
      setTaskList((prevTaskList)=>
        [...prevTaskList,newTask]
      )
    }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
       categories={CATEGORIES} 
       onCategoryChange={onCategoryChange}
       selectedCategory={selectedCategory}
      
      
      />
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES}/>
      <TaskList tasks={filterTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
