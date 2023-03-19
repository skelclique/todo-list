import { ClipboardText } from 'phosphor-react';

import styles from './EmptyList.module.css';

export function EmptyList() {
  return (
    <article className={styles.emptyList}>
      <ClipboardText
        size={56}
        weight="light"
      />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </article>
  );
}