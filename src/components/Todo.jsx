import { useState } from "react"
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const [todos, settodos] = useState([]);
    const completedTods = todos.filter((todo) => todo.done).length
    const totalTodos = todos.length
    return (
        <div>
            <Form todos={todos} settodos={settodos} />
            <TodoList todos={todos} settodos={settodos} />
            <Footer completedTods={completedTods} totalTodos={ totalTodos} />
        </div>
    );
}