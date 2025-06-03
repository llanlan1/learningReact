import React, { useState, useEffect } from 'react';
import styles from './App.module.css';  // <-- import CSS module

type Todo = {
  text: string;
};

const App: React.FC = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);

  const handleAdd = () => {
    const hasLetter = /[a-zA-Z]/.test(task);

    if (task.trim() === '' || !hasLetter) {
      setError('Please specify a proper task');
      return;
    }

    setTodos([...todos, { text: task }]);
    setTask('');
    setError(''); // Clear error on success
  };

  const [error, setError] = useState('');


  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Simple To-Do App</h1>
      <div className={styles.inputRow}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Enter a task ..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAdd();
              }
            }}
            className={styles.inputField}
          />
          {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
        <button onClick={handleAdd} className={styles.addButton}>
          +
        </button>
      </div>

      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
        <li key={index} className={styles.todoItem}>
          {todo.text}
          <button
            onClick={() => handleDelete(index)}
            className={styles.Deletebutton}
          >
            —
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
