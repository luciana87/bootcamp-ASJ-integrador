package com.bootcamp.gestorApp.controllers;

import java.util.List;

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

import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.services.ProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	private ProductService productService;

	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@GetMapping
	public ResponseEntity<List<Product>> retrieve() {
		return new ResponseEntity<List<Product>>(productService.retrieveAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Product> retriveById(@PathVariable Integer id) {
		return new ResponseEntity<Product>(productService.retriveById(id), HttpStatus.OK);
	}

	@GetMapping("/amount")
	public ResponseEntity<Integer> calculateAmountProducts() {
		return new ResponseEntity<Integer>(productService.calculateAmountProducts(), HttpStatus.OK);
	}

	@GetMapping("/supplier/{id}")
	public ResponseEntity<List<Product>> getProductsBySupplier(@PathVariable Integer id) {
		List<Product> productList = productService.getProductsBySupplier(id);
		return new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Product> create(@Valid @RequestBody ProductRequestDTO productDTO) {
		return new ResponseEntity<Product>(productService.create(productDTO), HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Product> delete(@PathVariable Integer id) {
		productService.delete(id);
		return new ResponseEntity<Product>(HttpStatus.NO_CONTENT);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Product> replace(@PathVariable Integer id, @RequestBody Product product) {
		productService.replace(id, product);
		return new ResponseEntity<Product>(HttpStatus.OK);
	}

	@PatchMapping("/{id}")
	public ResponseEntity<Product> activateProduct(@PathVariable Integer id, @RequestBody Product product) {
		productService.activateProduct(id, product);
		return new ResponseEntity<Product>(HttpStatus.OK);
	}

}
