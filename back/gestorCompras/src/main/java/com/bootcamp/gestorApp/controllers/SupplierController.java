package com.bootcamp.gestorApp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.services.SupplierService;

@RestController
@RequestMapping(path = "/suppliers")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {

	private SupplierService supplierService;
	
	public SupplierController(SupplierService supplierService) {
		this.supplierService = supplierService;
	}
	
	@GetMapping
	public ResponseEntity<List<Supplier>> retrieve() {
		return new ResponseEntity<List<Supplier>>(supplierService.retrieveAll(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Supplier> retriveById(@PathVariable Integer id) {
		return new ResponseEntity<Supplier>(supplierService.retriveById(id), HttpStatus.OK);
	}
	
}
