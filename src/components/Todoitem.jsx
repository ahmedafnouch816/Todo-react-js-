import styles from './todoitem.module.css';

export default function Todoitem({ item , todos, settodos }) {
    function handleDelete(item){
        console.log('Delete button clciked ', item);

        settodos(todos.filter((todo) => todo !== item))
    }
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>{item}
                <span>  
            <button onClick={(e)=>handleDelete(item)} className={styles.deletebutton}> X </button>
                </span>
            </div>
   
            <hr className={styles.line} />
        </div> 
    )
}


