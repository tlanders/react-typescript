import React from "react";
import {Todo} from "../types";

export interface TodoListItemProps {
    todo: Todo,
    onDelete: (id: string) => void,
    onMarkAsCompleted: (id: string) => void,
}

type TodoFcn = (props: TodoListItemProps) => JSX.Element;
type MyFcn<T> = (props: T) => JSX.Element;

// export const TodoListItem: React.FC<TodoListItemProps> = ({todo, onDelete, onMarkAsCompleted}) => {
// export const TodoListItem: (props:TodoListItemProps) => JSX.Element = ({todo, onDelete, onMarkAsCompleted}) => {
// export const TodoListItem: TodoFcn = ({todo, onDelete, onMarkAsCompleted}) => {
export const TodoListItem: MyFcn<TodoListItemProps> = ({todo, onDelete, onMarkAsCompleted}) => {
    return (
        <>
            <h3>{todo.text}</h3>
            <p>Urgency: {todo.urgency}</p>
            <p>Created: {new Date(todo.createdOn).toDateString()}</p>
            {todo.isComplete &&
                <p>Completed: {(todo.completedOn || new Date()).toDateString()}</p>
            }
            <button
                onClick={() => onMarkAsCompleted(todo.id)}
                disabled={todo.isComplete}
            >Mark As Completed</button>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
    );
};