package com.example.task2.service;

import java.util.List;

import com.example.task2.entity.Task;




public interface TaskService {
	
	public List<Task> getTasks();
	
	public Task getTaskById(Long taskld);
	
	public Task addTask(Task task);
	
	public Task updateTask(Task task,Long id);
	
	public void deleteTask(Long id);

}
