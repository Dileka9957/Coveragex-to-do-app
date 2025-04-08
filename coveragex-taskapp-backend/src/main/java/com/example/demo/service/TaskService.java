package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @Transactional
    public Task markTaskAsCompleted(Long id) {
        taskRepository.markAsCompleted(id);
        return taskRepository.findById(id).orElseThrow(() -> new RuntimeException("Task not found"));
    }

    public List<Task> findPendingTasks() {
        return taskRepository.findCompletedTasksExplicit();
    }

    public Task saveTask(Task task) {
        // Set default value for isCompleted if it's null
        if (task.getIsCompleted() == null) {
            task.setIsCompleted(false);
        }
        return taskRepository.save(task);
    }
}