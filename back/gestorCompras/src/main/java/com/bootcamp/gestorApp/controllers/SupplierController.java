package com.bootcamp.gestorApp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.DTO.request.SupplierRequestDTO;
import com.bootcamp.gestorApp.DTO.response.SupplierResponseDTO;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.services.SupplierService;

import jakarta.validation.Valid;

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
	
	@GetMapping("/detail/{id}")
	public ResponseEntity<SupplierResponseDTO> retriveDetailById(@PathVariable Integer id) {
		return new ResponseEntity<SupplierResponseDTO>(supplierService.retriveDetailById(id), HttpStatus.OK);
	}
	
	@GetMapping("/amount")
	public ResponseEntity<Integer> calculateAmountSuppliers() {
		return new ResponseEntity<Integer>(supplierService.calculateAmountSuppliers(), HttpStatus.OK);
	}
	
	 @PostMapping
	 public ResponseEntity<Supplier> create(@Valid @RequestBody SupplierRequestDTO supplierDTO) { 
		 return new	ResponseEntity<Supplier>(supplierService.create(supplierDTO),HttpStatus.CREATED); 
	 }
	 
	 @DeleteMapping("/{id}")
	 public ResponseEntity<Supplier> delete(@PathVariable Integer id){
		 supplierService.delete(id);
		 return new ResponseEntity<Supplier>( HttpStatus.NO_CONTENT);
	 }
	 
	 @PutMapping("/{id}")
	 public ResponseEntity<Supplier> activateSupplier(@PathVariable Integer id, @RequestBody Supplier supplier){
		 supplierService.replace(id,supplier);
		 return new ResponseEntity<Supplier>(HttpStatus.OK);
	 }
	 
	 @PatchMapping("/{id}") 
	 public ResponseEntity<Supplier> activateProduct(@PathVariable Integer id, @RequestBody Supplier supplier){
	 supplierService.activateSupplier(id,supplier); return new
	 ResponseEntity<Supplier>( HttpStatus.OK); 
	 }

}
