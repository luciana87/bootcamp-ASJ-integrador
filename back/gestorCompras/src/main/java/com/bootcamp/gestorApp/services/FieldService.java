package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.FieldRequestDTO;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.FieldRepository;

import jakarta.transaction.Transactional;

@Service
public class FieldService {
	
	private FieldRepository fieldRepository;
	
	public FieldService(FieldRepository fieldRepository) {
		this.fieldRepository = fieldRepository;
	}

	public Field findById(Integer id) {
		Optional<Field> fieldOptional =fieldRepository.findById(id);
		 if (fieldOptional.isEmpty()){
	            throw new ResourceNotFoundException("Rubro no encontrada.");
	        }
		return fieldOptional.get();
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
