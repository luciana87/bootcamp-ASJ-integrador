package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.CategoryRequestDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.exceptions.ExistingResourceException;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.CategoryRepository;

import jakarta.transaction.Transactional;

@Service
public class CategoryService {

	private CategoryRepository categoryRepository;

	public CategoryService(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	public Category retriveById(Integer categoryId) {
		Optional<Category> categoryOptional = categoryRepository.findById(categoryId);
		if (categoryOptional.isEmpty()) {
			throw new ResourceNotFoundException("Categoría no encontrada.");
		}
		return categoryOptional.get();
	}

	@Transactional
	public Category create(CategoryRequestDTO categoryDTO) {
		Category category = categoryRepository.findByName(categoryDTO.getName());
	
		if (category != null) {
			category.setDeleted(false);			
		} else {
			category = new Category(categoryDTO.getName());
		}
		return categoryRepository.save(category);
	}

	public List<Category> retrieveAll() {
		return categoryRepository.findAll();
	}

	public void delete(Integer id) {
		Category category = this.retriveById(id);
		category.setDeleted(true);
		categoryRepository.save(category);
	}

	public void replace(Integer id, Category category) {
		Optional<Category> categoryOptional = categoryRepository.findById(id);
		if (categoryOptional.isEmpty()) {
			throw new ResourceNotFoundException("Categoría no encontrada.");
		}

		Category categoryToReplace = categoryOptional.get();

		categoryToReplace.setName(category.getName());

		categoryRepository.save(categoryToReplace);

	}

}
