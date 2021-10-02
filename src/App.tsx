import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./todos/TodoList";
import {NewTodoForm} from "./todos/NewTodoForm";
import {NewTodo, Todo} from "./types";
import {v4 as uuid} from "uuid";

const fakeTodos: Todo[] = [
    {id: '123', text: 'first fake todo', createdOn: new Date(), isComplete: false, urgency: 'LOW'},
    {id: '234', text: 'second fake todo', createdOn: new Date(), isComplete: false, urgency: 'MED'},
    {id: '356', text: 'third fake todo', createdOn: new Date(), isComplete: false, urgency: 'HIGH'},
    {
        id: '475',
        text: 'completed todo',
        createdOn: new Date(),
        isComplete: true,
        urgency: 'MED',
        completedOn: new Date()
    },
];

interface AppProps {
}

const App: React.FC<AppProps> = () => {
    const [todos, setTodos] = useState<Todo[]>(fakeTodos);

    const onDelete = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const onCreate = (newTodo: NewTodo) => {
        const todo: Todo = {
            id: uuid(),
            isComplete: false,
            createdOn: new Date(),
            ...newTodo
        };

        const todosCopy = todos.slice();
        todosCopy.push(todo);
        setTodos(todosCopy);
    };

    return (
        <div>
            <NewTodoForm onCreate={onCreate}/>
            <TodoList todos={todos} onDelete={onDelete} onMarkAsCompleted={() => {
            }}/>
        </div>
    );
};

export default App;
