import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { TaskBox } from './components/TaskBox';
import { EmptyList } from './components/EmptyList';
import { CreateTask } from './components/CreateTask';

import styles from './App.module.css';

export interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

  const isTasksEmpty = tasks.length === 0;
  const createdTasks = tasks.length;
  const completedTasks = tasks.reduce((acc, task) => task.isCompleted ? acc + 1 : acc, 0);
  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <Header />

      <main>
        <CreateTask setTasks={setTasks} />
        
        <section>
          <header className={styles.header}>
            <div>Tarefas criadas <span>{createdTasks}</span></div>
            <div>
              Concluidas 
              <span>{completedTasks !== 0 ? `${completedTasks} de ${createdTasks}` : '0' }</span>
            </div>
          </header>

          { isTasksEmpty ? (
            <EmptyList />
          ) : (
            tasks
            .slice()
            .sort(task => task.isCompleted ? 1 : -1)
            .map((task) => (
              <TaskBox 
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                setTasks={setTasks}
              />
            ))
          ) }
        </section>
      </main>
    </div>
  );
}