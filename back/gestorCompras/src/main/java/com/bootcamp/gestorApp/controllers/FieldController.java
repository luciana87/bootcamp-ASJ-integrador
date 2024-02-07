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

import com.bootcamp.gestorApp.DTO.request.FieldRequestDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.services.FieldService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/fields")
@CrossOrigin(origins = "http://localhost:4200")
public class FieldController {
	
	private FieldService fieldService;
	
	public FieldController(FieldService fieldService) {
		this.fieldService = fieldService;
	}

	@GetMapping
	public ResponseEntity<List<Field>> retrieve() {
		return new ResponseEntity<List<Field>>(fieldService.retrieveAll(),HttpStatus.OK);
	}
	
	 @PostMapping
	 public ResponseEntity<Field> create(@Valid @RequestBody Field field) { 
		 return new	ResponseEntity<Field>(fieldService.create(field), HttpStatus.CREATED); 
	 }
	 
	 @DeleteMapping("/{id}")
	 public ResponseEntity<Field> delete(@PathVariable Integer id){
		 fieldService.delete(id);
		 return new ResponseEntity<Field>( HttpStatus.NO_CONTENT);
	 }
	 
	 @PutMapping("/{id}")
	 public ResponseEntity<Field> replace(@PathVariable Integer id, @RequestBody Field field){
		 fieldService.replace(id,field);
		 return new ResponseEntity<Field>( HttpStatus.OK);
	 }
}
