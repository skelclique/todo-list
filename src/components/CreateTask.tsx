import { Task } from '../App';

import { FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';

import { v4 as uuidv4 } from 'uuid';

import styles from './CreateTask.module.css';

interface CreateTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function CreateTask({
  setTasks
}: CreateTaskProps) {
  const [newTask, setNewTask] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    setTasks(tasks => [...tasks, {
      id: uuidv4(),
      content: newTask,
      isCompleted: false,
    }]);

    setNewTask('');
  }

  return (
    <form 
      className={styles.createTask}
      onSubmit={handleCreateTask}
    >
      <input 
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
        required
      />
      <button
        disabled={newTask.length === 0}
      >
        Criar
        <PlusCircle 
          size={16} 
          weight="bold"
        />
      </button>
    </form>
  );
}
