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


	/*
	 * public Optional<Product> retriveById(Integer id) { Optional<Product> product
	 * = productRepository.findById(id); return product; }
	 */
	
	public ProductResponseDTO retriveById(Integer id) {
		Optional<Product> product = productRepository.findById(id);
		
        if (product.isEmpty()){
            throw new ResourceNotFoundException("Producto no encontrado.");
        }
        return mapToDTO(product.get());
	}

	/*
	 * public Product create(Product product) { //LLamar al servicio de category y
	 * de supplier, buscar y obtener las entidades por id para setearselas al
	 * producto antes de guardarlo. SIno guarda null Product productSavedProduct =
	 * productRepository.save(product); return productSavedProduct; }
	 */
	 
	
	@Transactional
	public Product create(ProductRequestDTO productDTO) {
		
		checkForExistingProduct(productDTO.getSku());
		
		Category category = categoryService.retriveById(productDTO.getCategoryId());
		Supplier supplier = supplierService.retriveById(productDTO.getSupplierId());
		
		Product productSavedProduct = mapToEntity(productDTO, category,supplier);
		
		return productRepository.save(productSavedProduct);
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


}
