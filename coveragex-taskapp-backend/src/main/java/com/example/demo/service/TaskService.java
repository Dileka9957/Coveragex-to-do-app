package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Task;
import com.example.demo.repository.TaskRepository;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    public Task saveTask(Task task) {
        // Set default value for isCompleted if it's null
        if (task.getIsCompleted() == null) {
            task.setIsCompleted(false);
        }
        return taskRepository.save(task);
    }
}