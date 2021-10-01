import React from 'react';
import './App.css';
import {TodoList} from "./todos/TodoList";
import {NewTodoForm} from "./todos/NewTodoForm";
import {useState} from "react";
import {Todo} from "./types";

const fakeTodos: Todo[] = [
    {id:'123', text:'first fake todo', createdOn:new Date(), isComplete:false, urgency:'LOW'},
    {id:'234', text:'second fake todo', createdOn:new Date(), isComplete:false, urgency:'MED'},
    {id:'356', text:'third fake todo', createdOn:new Date(), isComplete:false, urgency:'HIGH'},
    {id:'475', text:'completed todo', createdOn:new Date(), isComplete:true, urgency:'MED', completedOn: new Date()},
];

function App() {
  return (
      <div>
        <TodoList todos={fakeTodos} onDelete={() => {}} onMarkAsCompleted={() => {}}/>
        <NewTodoForm onCreate={() => {}}/>
      </div>
  );
}

export default App;
