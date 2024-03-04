package com.example.task2.controller;

import java.util.List;

import com.example.task2.entity.Task;
import com.example.task2.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@AllArgsConstructor
public class MyController {
	

	private TaskService taskService;
	
	
	//get the tasks

	@GetMapping("/tasks")
	public ResponseEntity<List<Task>> getTasks(){
		List<Task> taskList = taskService.getTasks();
		return  ResponseEntity.ok(taskList);
	}
	
	//single task get

	@GetMapping("/tasks/{taskId}")
	public Task getTask(@PathVariable Long taskId){
		Task task = taskService.getTaskById(taskId);
		return new ResponseEntity<>(task,HttpStatus.OK).getBody();
	}
	
	
	//task add

	@PostMapping(path= "/tasks", consumes= "application/json")
	public ResponseEntity<Task> createTask(@RequestBody Task task){
		Task task1 = taskService.addTask(task);
		return new ResponseEntity<>(task1,HttpStatus.CREATED);
	}

	
	//update the task

	@PutMapping("/tasks/{id}")
	public  ResponseEntity<Task> updateTask(@RequestBody Task task,@PathVariable Long id){
		Task task1 = taskService.updateTask(task,id);
		return ResponseEntity.ok(task1);
	}
	
	//delete the task

	@DeleteMapping("/tasks/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable Long taskId){
		taskService.deleteTask(taskId);
		return ResponseEntity.ok("Task deleted successfully");
	} 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
