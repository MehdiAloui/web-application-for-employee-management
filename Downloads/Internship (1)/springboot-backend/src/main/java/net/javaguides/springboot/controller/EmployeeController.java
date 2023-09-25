package net.javaguides.springboot.controller;

import java.net.http.HttpRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.util.JSONPObject;

import net.javaguides.springboot.data.DomainBean;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;


import com.fasterxml.jackson.databind.ObjectMapper;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	// get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}	
	/*@GetMapping("/nbreMale")
	public long getNbreMale() {
		return employeeRepository.countMale("Male");
	}
	@GetMapping("/nbreFemale")
	public long getNbreFemale() {
		return employeeRepository.countMale("Female");
	}*/
	@GetMapping("/nbre")
	public ArrayList<DomainBean>getNbre(){
		ArrayList<DomainBean> arr = new ArrayList<>();
        DomainBean typeOne = new DomainBean();
        typeOne.setType("Male");
        typeOne.setNumber(employeeRepository.countMale("Male"));
        DomainBean typeTwo = new DomainBean();
        typeTwo.setType("Female");
        typeTwo.setNumber(employeeRepository.countMale("Female"));
         
        arr.add(typeOne);
        arr.add(typeTwo);
         
		
		return arr;
	}
	/*@GetMapping("/try")
	public */
	
	
	
	// create employee rest api
	
	/*@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}*/
	@PostMapping("/employees")
	public ResponseEntity<Employee>  createEmployee(@RequestBody Employee employee) {
		
		return new ResponseEntity<>(employeeRepository.save(employee),HttpStatus.CREATED);
	}
	// get employee by id rest api
	@GetMapping ("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :"+id));
		return ResponseEntity.ok(employee);
	}
	
	// update employee rest api
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id , @RequestBody Employee employeeDetails) {
		Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :"+id));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		Employee updateEmployee= employeeRepository.save(employee);
		return ResponseEntity.ok(updateEmployee);

	} 
	// delete employee rest api
	
	
	@DeleteMapping("/employees/{id}")
	public void deleteEmployee(@PathVariable(value = "id") Long employeeId)
	  throws ResourceNotFoundException {
	     Employee employee = employeeRepository.findById(employeeId)
	       .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	     employeeRepository.delete(employee);
	    
	}
	
}
