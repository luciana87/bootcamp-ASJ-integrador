package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Integer>{

}
