import styles from './Footer.module.css'

export default function Footer({ completedTods, totalTodos }) {
    return (
        
        <div className={styles.footer}>
    
        <span className={styles.item}>
        completed todos : {completedTods}
            </span>
            
               <span className={styles.item} >
        Total  todos : {totalTodos}
        </span>
    </div>
    
    )
}