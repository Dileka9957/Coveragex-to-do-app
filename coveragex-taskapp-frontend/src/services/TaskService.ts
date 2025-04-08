import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/tasks';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export interface Task {
  id?: number;
  title: string;
  description: string;
  isCompleted?: boolean;
}

const TaskService = {
  createTask: async (task: Omit<Task, 'id'>): Promise<Task> => {
    try {
      const response = await apiClient.post('/add', task);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  },

  getPendingTasks: async (): Promise<Task[]> => {
    try {
      const response = await apiClient.get('/pending');
      return response.data;
    } catch (error) {
      console.error('Error fetching completed tasks:', error);
      throw error;
    }
  },

  markTaskAsCompleted: async (id: number): Promise<Task> => {
    try {
      const response = await apiClient.put(`/${id}/complete`);
      return response.data;
    } catch (error) {
      console.error('Error marking task as completed:', error);
      throw error;
    }
  }
};

export default TaskService;