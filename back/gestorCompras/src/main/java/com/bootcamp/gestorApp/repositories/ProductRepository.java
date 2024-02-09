package com.bootcamp.gestorApp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.gestorApp.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	boolean existsBySku(String sku);

	
	List<Product> getProductsBySupplierIdAndDeletedFalse(Integer id);


	@Query("SELECT COUNT(p) FROM Product p WHERE p.deleted = false")
	Integer getAmountProducts();


	List<Product> findProductsBySupplierId(Integer supplierId);


}
