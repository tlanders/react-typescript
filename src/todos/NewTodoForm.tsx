import {useState} from "react";
import {NewTodo, Urgency} from "../types";

export interface NewTodoFormProps {
    onCreate: (newTodo: NewTodo) => void;
}

export const NewTodoForm: React.FC<NewTodoFormProps> = ({onCreate}) => {
    const [text, setText] = useState('');
    const [urgency, setUrgency] = useState<Urgency>('LOW');


    const createNewTodo = () => {
        const newTodo: NewTodo = {
            text,
            urgency
        };
        onCreate(newTodo);
        setText('');
        setUrgency('LOW');
    };

    return (
        <>
            <h3>Add a new todo</h3>
            <input
                type={"text"}
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={"New todo text..."}/>

            <div>
                Urgency:
                <input
                    type={"radio"}
                    name={"urgency"}
                    value={"LOW"}
                    checked={urgency === 'LOW'}
                    onChange={() => setUrgency('LOW')}/> Low
                <input
                    type={"radio"}
                    name={"urgency"}
                    value={"MED"}
                    checked={urgency === 'MED'}
                    onChange={() => setUrgency('MED')}/> Medium
                <input
                    type={"radio"}
                    name={"urgency"}
                    value={"HIGH"}
                    checked={urgency === 'HIGH'}
                    onChange={() => setUrgency('HIGH')}/> High
            </div>
            <button onClick={createNewTodo}>Create</button>
        </>
    );
};