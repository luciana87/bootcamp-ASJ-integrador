package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Country;

public interface CountryRepository extends JpaRepository<Country, Integer>{

}
