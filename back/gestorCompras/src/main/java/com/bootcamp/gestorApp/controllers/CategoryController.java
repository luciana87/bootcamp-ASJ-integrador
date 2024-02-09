package com.bootcamp.gestorApp.controllers;

import java.util.List;

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

import com.bootcamp.gestorApp.DTO.request.CategoryRequestDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.services.CategoryService;


@RestController
@RequestMapping(path = "/categories")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController {
	
	private CategoryService categoryService;
	
	public CategoryController (CategoryService category) {
		this.categoryService = category;
	}

	
	 @PostMapping()
	 public ResponseEntity<Category> createCategory(@RequestBody CategoryRequestDTO categoryDTO) { 
		 return new	ResponseEntity<Category>(categoryService.create(categoryDTO),HttpStatus.CREATED); 
	 }
	 
	@GetMapping
	public ResponseEntity<List<Category>> retrieve() {
		return new ResponseEntity<List<Category>>(categoryService.retrieveAll(),HttpStatus.OK);
	}
	
	 @DeleteMapping("/{id}")
	 public ResponseEntity<Category> delete(@PathVariable Integer id){
		 categoryService.delete(id);
		 return new ResponseEntity<Category>( HttpStatus.NO_CONTENT);
	 }
	 
	 @PutMapping("/{id}")
	 public ResponseEntity<Category> replace(@PathVariable Integer id, @RequestBody Category category){
		 categoryService.replace(id,category);
		 return new ResponseEntity<Category>( HttpStatus.OK);
	 }
	
}
