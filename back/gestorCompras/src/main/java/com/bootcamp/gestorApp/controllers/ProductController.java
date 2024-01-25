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

import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ProductResponseDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.services.ProductService;

import jakarta.validation.Valid;

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
	public ResponseEntity<ProductResponseDTO> retriveById(@PathVariable Integer id) {
		return new ResponseEntity<ProductResponseDTO>(productService.retriveById(id), HttpStatus.OK);
	}
	
	/*
	 * @PostMapping public ResponseEntity<Product> create(@RequestBody Product
	 * product) { return new
	 * ResponseEntity<Product>(productService.create(product),HttpStatus.CREATED);
	 * 
	 * }
	 */
	 @PostMapping
	 public ResponseEntity<Product> createProduct(@Valid @RequestBody ProductRequestDTO productDTO) { 
		 return new	ResponseEntity<Product>(productService.create(productDTO),HttpStatus.CREATED); 
	 }

	
	
	
	
	

}
