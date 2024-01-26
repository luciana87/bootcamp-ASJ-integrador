package com.bootcamp.gestorApp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.CategoryRequestDTO;
import com.bootcamp.gestorApp.DTO.request.FieldRequestDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.repositories.FieldRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class FieldService {
	
	private FieldRepository fieldRepository;
	
	public FieldService(FieldRepository fieldRepository) {
		this.fieldRepository = fieldRepository;
	}

	public List<Field> retrieveAll() {
		return fieldRepository.findAll();
	}

	@Transactional
	public Field create(FieldRequestDTO fieldDTO) {
		Field field = new Field(fieldDTO.getName());
		return fieldRepository.save(field);
	}

}
