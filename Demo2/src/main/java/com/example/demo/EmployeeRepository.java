package com.example.demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.Employee;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
	 
}