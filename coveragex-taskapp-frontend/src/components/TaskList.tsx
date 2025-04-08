import { Task } from '../services/TaskService';
import TaskCard from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onTaskCompleted: (id: number) => void;
}

const TaskList = ({ tasks, onTaskCompleted }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-tasks">
        <p>No tasks to display. Add a new task to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          onCompleted={() => onTaskCompleted(task.id!)}
        />
      ))}
    </div>
  );
};

export default TaskList;