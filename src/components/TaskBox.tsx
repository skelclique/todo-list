import { Task } from '../App';

import { Check, Trash } from 'phosphor-react';

import styles from './TaskBox.module.css';

interface TaskBoxProps extends Task {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskBox({
  id,
  content,
  isCompleted,
  setTasks
}: TaskBoxProps) {
  function handleCompleteTask() {
    setTasks(tasks => tasks.map((task) => {
      if (task.id === id) {
        return {
          id: task.id,
          content: task.content,
          isCompleted: !task.isCompleted
        }
      } else {
        return {
          id: task.id,
          content: task.content,
          isCompleted: task.isCompleted
        }
      }
    }));
  }

  function handleDeleteTask() {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <article className={styles.taskBox}>
      <button 
        className={`${styles.checkbox} ${isCompleted ? styles.checkboxChecked : ''}`}
        onClick={handleCompleteTask}
      >
        { isCompleted ? (
          <Check 
            size={20} 
            weight="bold"
          />
        ) : null }
      </button>
      <p style={isCompleted ? { textDecoration: 'line-through', color: 'var(--gray-300)' } : {}}>{content}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={20}/>
      </button>
    </article>
  );
}