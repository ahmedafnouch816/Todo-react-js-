import { useState } from "react"

import styles from './form.module.css';

export default function Form({todos , settodos}) {
    //const [todo, settodo] = useState("");
    const [todo, settodo] = useState({name:"" , done:false});

    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        settodo({name:"" , done:false})
    }
    return (
        
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputConytaire}>
                <input className={styles.moderinput}
                    onChange={(e) => settodo({name:e.target.value, done:false})}
                    type="text" value={todo.name}
                    placeholder="enter tot item " />
                
                <button className={styles.moderbutton} type="submit"> Add</button>
            </div>
               
            </form>
    )
}