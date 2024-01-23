package com.bootcamp.gestorApp.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.services.ProductService;

@RestController
@RequestMapping(path = "/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	private ProductService productService;
	
	public ProductController (ProductService productService) {
		this.productService = productService;
	}
	
	@GetMapping
	public ResponseEntity<List<Product>> retrieve() {
		return new ResponseEntity<List<Product>>(productService.retrieveAll(),HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<Product>> retriveById(@PathVariable Integer id) {
		return new ResponseEntity<Optional<Product>>(productService.retriveById(id), HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Product> create(@RequestBody Product product) {
		return new ResponseEntity<Product>(productService.create(product),HttpStatus.CREATED);
		
	}

}
