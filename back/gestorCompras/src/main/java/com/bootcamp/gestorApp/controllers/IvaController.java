package com.bootcamp.gestorApp.controllers;


import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.DTO.request.FieldRequestDTO;
import com.bootcamp.gestorApp.DTO.request.IvaRequestDTO;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.entities.IvaType;
import com.bootcamp.gestorApp.services.IvaService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/iva-types")
@CrossOrigin(origins = "http://localhost:4200")
public class IvaController {
	private IvaService ivaService;
	
	public IvaController(IvaService ivaService) {
		this.ivaService = ivaService;
	}
	
	@GetMapping
	public ResponseEntity<List<IvaType>> retrieve() {
		return new ResponseEntity<List<IvaType>>(ivaService.retrieveAll(),HttpStatus.OK);
	}
	
	 @PostMapping
	 public ResponseEntity<IvaType> create(@Valid @RequestBody IvaRequestDTO ivaDTO) { 
		 return new	ResponseEntity<IvaType>(ivaService.create(ivaDTO),HttpStatus.CREATED); 
	 }

}
