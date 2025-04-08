import { useState, ChangeEvent, FormEvent } from 'react';
import TaskService, { Task } from '../services/TaskService';

interface TaskFormProps {
  onTaskAdded: (task: Task) => void;
}

const TaskForm = ({ onTaskAdded }: TaskFormProps) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    isCompleted:false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!task.title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const newTask = await TaskService.createTask({
        title: task.title,
        description: task.description,
        isCompleted: false
      });
      console.log('new',task)
      onTaskAdded(newTask);
      setTask({ title: '', description: '',isCompleted:false });
    } catch (err) {
      setError('Failed to create task. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="task-form-container">
      <h2>Add a Task</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Enter task title"
            disabled={loading}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Enter task description"
            disabled={loading}
            rows={4}
          />
        </div>
        <button 
          type="submit" 
          className="add-button"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;