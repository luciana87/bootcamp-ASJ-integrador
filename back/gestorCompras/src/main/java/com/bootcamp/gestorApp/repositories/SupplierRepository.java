package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer>{

}
