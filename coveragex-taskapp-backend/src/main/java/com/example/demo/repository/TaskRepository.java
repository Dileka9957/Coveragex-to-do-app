package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.entity.Task;

@Repository

public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query("SELECT t FROM Task t WHERE t.isCompleted = false")
    List<Task> findCompletedTasksExplicit();

    @Modifying
    @Transactional
    @Query("UPDATE Task t SET t.isCompleted = true WHERE t.id = :id")
    void markAsCompleted(@Param("id") Long id);
}