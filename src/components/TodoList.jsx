import Todoitem from "./Todoitem";
import styles from "./todoliste.module.css";

export default function TodoList({todos , settodos}) {

    return (
        <div className={styles.liste}>
            {todos.map((item) => (
                <Todoitem key={item} item={item} todos={todos} settodos={settodos} />
            ))}
        </div>
    );
    

}