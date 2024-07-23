import { useState } from "react"

import styles from './form.module.css';

export default function Form({todos , settodos}) {
    const [todo, settodo] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        settodos([...todos, todo]);
        settodo("")
    }
    return (
        
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputConytaire}>
                <input className={styles.moderinput}
                    onChange={(e) => settodo(e.target.value)}
                    type="text" value={todo}
                    placeholder="enter tot item " />
                
                <button className={styles.moderbutton} type="submit"> Add</button>
            </div>
               
            </form>
    )
}