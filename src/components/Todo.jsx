import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";

export default function Todo(){
    const [todos, settodos] = useState([]);

    return (
        <div>
            <Form todos={todos} settodos={settodos} />
            <TodoList todos={todos} settodos={settodos} />
        </div>
    );
}