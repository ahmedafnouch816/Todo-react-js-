import styles from './todoitem.module.css';

export default function Todoitem({ item , todos, settodos }) {
    function handleDelete(item){
        console.log('Delete button clciked ', item);

        settodos(todos.filter((todo) => todo !== item))
    }

    function handleClick(name) {
   
        settodos(todos.map((todo) =>
            todo.name === name ? {...todo, done: !todo.done} : todo
        ) )
        
    }

    const className = item.done ?  styles.completed : ""
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={className} onClick={() => handleClick(item.name)}>
                 {item.name}
                </span>
                <span>  
            <button onClick={(e)=>handleDelete(item)} className={styles.deletebutton}> X </button>
                </span>
            </div>
   
            <hr className={styles.line} />
        </div> 
    )
}


