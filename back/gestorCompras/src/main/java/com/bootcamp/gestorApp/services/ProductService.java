package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ProductResponseDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ExistingResourceException;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.ProductRepository;
import com.bootcamp.gestorApp.utils.Util;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;

import jakarta.transaction.Transactional;

@Service
public class ProductService {
	

	
	private ProductRepository productRepository;
	private CategoryService categoryService;
	private SupplierService supplierService;
	
	public ProductService (ProductRepository productRepository,CategoryService categoryService, SupplierService supplierService ) {
		this.productRepository = productRepository;
		this.categoryService = categoryService;
		this.supplierService = supplierService;
	}
	

	public List<Product> retrieveAll() {
		return productRepository.findAll();
	}


	
	  public Product retriveById(Integer id) { 
		  Optional<Product> productOptional = productRepository.findById(id); 
		  
		  if (productOptional.isEmpty()) {
			  throw new ResourceNotFoundException("¨Producto no encontrado.");
		  }
		  return productOptional.get();
	  }

	
	/*
	 * public ProductResponseDTO retriveById(Integer id) { Optional<Product> product
	 * = productRepository.findById(id);
	 * 
	 * if (product.isEmpty()){ throw new
	 * ResourceNotFoundException("Producto no encontrado."); } return
	 * mapToDTO(product.get()); }
	 */

	 
	
	@Transactional
	public Product create(ProductRequestDTO productDTO) {
		
		checkForExistingProduct(productDTO.getSku());
		
		Supplier supplier = supplierService.retriveById(productDTO.getSupplierId());
		Category category = categoryService.retriveById(productDTO.getCategoryId());
		
		Product productSaved = mapToEntity(productDTO, category,supplier);
		
		return productRepository.save(productSaved);
	}
	    
    private void checkForExistingProduct(String sku) {
        if (productRepository.existsBySku(sku)) {
            throw new ExistingResourceException();
        }
    }
    
    private Product mapToEntity(ProductRequestDTO productDTO, Category category, Supplier supplier) {

    	Product product = Util.getModelMapper().map(productDTO, Product.class);
	    product.setCategory(category);
	    product.setSupplier(supplier);

	    return product;
    }
    
    private ProductResponseDTO mapToDTO(Product product) {
    	ProductResponseDTO productDTO = Util.getModelMapper().map(product, ProductResponseDTO.class);
        return productDTO;
    }


	public void delete(Integer id) {
		Product product = this.retriveById(id);
		product.setDeleted(true);
		productRepository.save(product);
		//productRepository.deleteById(id);
	}
	

	public void replace(Integer id, Product product) {
		
		  Optional<Product> productOptional = productRepository.findById(id); 
		  if (productOptional.isEmpty()) { 
			  throw new ResourceNotFoundException("Product no encontrado."); 
		  }
		  Supplier supplier = supplierService.retriveById(product.getSupplier().getId());
		  Category category = categoryService.retriveById(product.getCategory().getId());
		  
		  Product productToReplace = productOptional.get();
		  
	
		  productToReplace.setName(product.getName());
		  productToReplace.setSku(product.getSku());
		  productToReplace.setPrice(product.getPrice());
		  productToReplace.setName(product.getName());
		  productToReplace.setDescription(product.getDescription());
		  productToReplace.setImage(product.getImage());
		  productToReplace.setCategory(category);
		  productToReplace.setSupplier(supplier);
		  
		 
	 
        productRepository.save(productToReplace);
	}


}
