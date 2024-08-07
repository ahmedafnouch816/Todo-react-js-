import Todoitem from "./Todoitem";
import styles from "./todoliste.module.css";

export default function TodoList({todos , settodos}) {

    const sortedTodos = todos.slice().sort((a, b) =>Number(a.done)-Number(b.done))

    return (
        <div className={styles.liste}>
            {sortedTodos.map((item) => (
                <Todoitem
                    key={item.name}
                    item={item}
                    todos={todos}
                    settodos={settodos} />
            ))}
        </div>
    );
    

}