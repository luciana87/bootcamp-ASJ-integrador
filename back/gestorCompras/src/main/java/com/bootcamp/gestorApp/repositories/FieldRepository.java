package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Field;

public interface FieldRepository extends JpaRepository<Field, Integer>{

	Field findByName(String name);

}
