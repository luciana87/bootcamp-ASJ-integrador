package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	boolean existsBySku(String sku);

}
