package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.CategoryRequestDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.CategoryRepository;

import jakarta.transaction.Transactional;


@Service
public class CategoryService {
	
	private CategoryRepository categoryRepository;
	
	public CategoryService( CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	public Category retriveById(Integer categoryId) {
		Optional<Category> categoryOptional =categoryRepository.findById(categoryId);
		 if (categoryOptional.isEmpty()){
	            throw new ResourceNotFoundException("Categoría no encontrada.");
	        }
		return categoryOptional.get();
	}
	
	@Transactional
	public Category create(CategoryRequestDTO categoryDTO) {
		Category category = new Category(categoryDTO.getName());
		return categoryRepository.save(category);
	}
	
	public List<Category> retrieveAll() {
		return categoryRepository.findAll();
	}
    
}
