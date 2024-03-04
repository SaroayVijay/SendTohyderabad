package com.example.task2.service;
import java.util.List;
import com.example.task2.entity.Task;
import com.example.task2.exception.ResourceNotFoundException;
import com.example.task2.repository.TaskRepo;
import org.springframework.stereotype.Service;
import lombok.AllArgsConstructor;
@Service
@AllArgsConstructor
public class TaskServiceImp implements TaskService {
	
private TaskRepo taskrepo;

@Override
public List<Task> getTasks() {
	// TODO Auto-generated method stub
	List<Task> savedTask = taskrepo.findAll();
	return savedTask;
}

@Override
public Task getTaskById(Long taskld) {
	// TODO Auto-generated method stub
	Task task = taskrepo.findById(taskld).orElseThrow(
			() -> new ResourceNotFoundException("Todo Not  found with id : "+taskld));
	return task;
}

@Override
public Task addTask(Task task) {
	// TODO Auto-generated method stub
 Task task1 = taskrepo.save(task);
	return task1;
}

@Override
public Task updateTask(Task task,Long id) {
	// TODO Auto-generated method stub
	Task task1 = taskrepo.findById(id).orElseThrow(
			() -> new ResourceNotFoundException("Todo not found with id "+id));

			task1.setDescription(task.getDescription());
			task1.setTitle(task.getTitle());
			task1.setDueDate(task.getDueDate());
			Task updatedTask = taskrepo.save(task1);
	return updatedTask;
}

@Override
public void deleteTask(Long id) {
	// TODO Auto-generated method stub
	taskrepo.deleteById(id);
	
}
	
	
	
		

}
