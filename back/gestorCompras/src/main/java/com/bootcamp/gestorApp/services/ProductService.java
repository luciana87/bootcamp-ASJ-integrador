package com.bootcamp.gestorApp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ProductResponseDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ExistingResourceException;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.exceptions.ValidateErrors;
import com.bootcamp.gestorApp.repositories.ProductRepository;
import com.bootcamp.gestorApp.utils.Util;

import jakarta.transaction.Transactional;

@Service
public class ProductService {

	private ProductRepository productRepository;
	private CategoryService categoryService;
	private SupplierService supplierService;

	public ProductService(ProductRepository productRepository, CategoryService categoryService,
			@Lazy SupplierService supplierService) {
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

	@Transactional
	public Product create(ProductRequestDTO productDTO) {

		checkForExistingProduct(productDTO.getSku());

		Supplier supplier = supplierService.retriveById(productDTO.getSupplierId());
		Category category = categoryService.retriveById(productDTO.getCategoryId());
		Product product = mapToEntity(productDTO, category, supplier);

		return productRepository.save(product);
	}

	public void delete(Integer id) {
		
		Product product = this.retriveById(id);
		if(product.getSupplier().isDeleted() != false) {
			throw new ValidateErrors(
					"El proveedor del producto que está intentando eliminar no se encuentra activo.");
		} else {}
		product.setDeleted(true);
		productRepository.save(product);
	}

	@Transactional
	public void replace(Integer id, Product product) {

		Optional<Product> productOptional = productRepository.findById(id);
		if (productOptional.isEmpty()) {
			throw new ResourceNotFoundException("Producto no encontrado.");
		}
		Supplier supplier = supplierService.retriveById(product.getSupplier().getId());
		Category category = categoryService.retriveById(product.getCategory().getId());

		Product productToReplace = productOptional.get();

		productToReplace.setName(product.getName());
		productToReplace.setSku(product.getSku());
		productToReplace.setPrice(product.getPrice());
		productToReplace.setDescription(product.getDescription());
		productToReplace.setImage(product.getImage());
		productToReplace.setCategory(category);
		productToReplace.setSupplier(supplier);

		productRepository.save(productToReplace);
	}

	public List<Product> getProductsBySupplier(Integer id) {
		return productRepository.getProductsBySupplierIdAndDeletedFalse(id);
	}

	public Integer calculateAmountProducts() {
		Integer amount = productRepository.getAmountProducts();
		return amount;
	}

	public void activateProduct(Integer id, Product product) {
		
		Product productFound = this.retriveById(id);
		if(product.getSupplier().isDeleted() != false) {
			throw new ValidateErrors(
					"El proveedor del producto que está intentando eliminar no se encuentra activo.");
		} else {

			productFound.setDeleted(false);
			productRepository.save(productFound);
		}
	}

	@Transactional
	public void deleteBySupplier(Integer supplierId) {
		productRepository.deleteProductsBySupplierId(supplierId);
	}

	private void checkForExistingProduct(String sku) {
		if (productRepository.existsBySku(sku)) {
			throw new ExistingResourceException("El SKU ya existe.");
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
