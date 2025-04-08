import { Task } from "../services/TaskService";

interface TaskCardProps {
  task: Task;
  onCompleted: () => void;
}

const TaskCard = ({ task, onCompleted }: TaskCardProps) => {
  return (
    <div className="task-card">
      <div className="task-content">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-description">{task.description}</p>
      </div>
      <button
        className="done-button"
        onClick={onCompleted}
      >
        Done
      </button>
    </div>
  );
};

export default TaskCard;