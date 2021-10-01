import {Todo} from "../types";
import React from "react";
import {TodoListItem} from "./TodoListItem";

export interface TodoListProps {
    todos: Todo[],
    onDelete: (id:string) => void,
    onMarkAsCompleted: (id:string) => void
};

export const TodoList: React.FC<TodoListProps> = ({todos, onDelete, onMarkAsCompleted}) => {
    return (
        <>
            {todos.map(todo => {
                return (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onMarkAsCompleted={onMarkAsCompleted} />
                )
            })}
        </>
    )
}