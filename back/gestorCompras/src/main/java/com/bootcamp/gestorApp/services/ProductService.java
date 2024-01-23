package com.bootcamp.gestorApp.services;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.repositories.ProductRepository;

@Service
public class ProductService {
	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm");
	private ProductRepository productRepository;
	
	public ProductService (ProductRepository productRepository) {
		this.productRepository = productRepository;
	}
	

	public List<Product> retrieveAll() {
		return productRepository.findAll();
	}


	public Optional<Product> retriveById(Integer id) {
		Optional<Product> product = productRepository.findById(id);
		return product;
	}


	public Product create(Product product) {
		//LLamar al servicio de category y de supplier, buscar y obtener las entidades por id para setearselas al producto antes de guardarlo. SIno guarda null
		Product productSavedProduct = productRepository.save(product);
		return productSavedProduct;
	}
	

}
