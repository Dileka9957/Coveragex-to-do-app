import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskService, { Task } from './services/TaskService';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await TaskService.getPendingTasks();
      // Sort tasks by most recent first
      const sortedTasks = data.sort((a, b) => (b.id || 0) - (a.id || 0));
      setTasks(sortedTasks);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleTaskAdded = (newTask: Task) => {
    setTasks([newTask, ...tasks]);
  };

  const handleTaskCompleted = async (id: number) => {
    try {
      await TaskService.markTaskAsCompleted(id);
      // Update the task in the local state
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, isCompleted: true } : task
      ));
      // Alternatively, you could reload all tasks:
      // loadTasks();
    } catch (err) {
      setError('Failed to update task status. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <h1>To-do App</h1>
      <div className="todo-content">
        <div className="form-side">
          <TaskForm onTaskAdded={handleTaskAdded} />
        </div>
        <div className="task-side">
          {loading ? (
            <div className="loading">Loading tasks...</div>
          ) : error ? (
            <div className="error">{error}</div>
          ) : (
            <TaskList tasks={tasks} onTaskCompleted={handleTaskCompleted} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;