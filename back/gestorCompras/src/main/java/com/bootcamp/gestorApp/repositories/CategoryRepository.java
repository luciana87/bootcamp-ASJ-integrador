package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

}
