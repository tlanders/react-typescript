import React from "react";
import {Todo} from "../types";

export interface TodoListItemProps {
    todo: Todo,
    onDelete: (id: string) => void,
    onMarkAsCompleted: (id: string) => void,
}

export const TodoListItem: React.FC<TodoListItemProps> = ({todo, onDelete, onMarkAsCompleted}) => {
    return (
        <>
            <h3>{todo.text}</h3>
            <p>Urgency: {todo.urgency}</p>
            {todo.isComplete && <p>Completed!</p>}
            <p>Created On: {new Date(todo.createdOn).toDateString()}</p>
            <button onClick={() => onMarkAsCompleted(todo.id)}>Mark As Completed</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
    );
};