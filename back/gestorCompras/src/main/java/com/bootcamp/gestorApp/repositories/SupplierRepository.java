package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.gestorApp.entities.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer>{

	boolean existsByCode(String code);

	@Query("SELECT COUNT(s) FROM Supplier s WHERE s.deleted = false")
	Integer getAmountProducts();

	boolean existsByBusinessName(String businessName);

	boolean existsByCuit(String cuit);

}
