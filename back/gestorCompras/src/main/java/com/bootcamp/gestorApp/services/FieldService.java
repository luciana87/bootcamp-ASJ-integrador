package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

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
		Optional<Field> fieldOptional = fieldRepository.findById(id);
		if (fieldOptional.isEmpty()) {
			throw new ResourceNotFoundException("Rubro no encontrado.");
		}
		return fieldOptional.get();
	}

	public List<Field> retrieveAll() {
		return fieldRepository.findAll();
	}

	@Transactional
	public Field create(Field field) {
		Field fieldToCreate = new Field(field.getName());
		return fieldRepository.save(fieldToCreate);
	}

	public void delete(Integer id) {
		Field field = this.findById(id);
		field.setDeleted(true);
		fieldRepository.save(field);
	}

	public void replace(Integer id, Field field) {
		Optional<Field> fieldOptional = fieldRepository.findById(id);
		if (fieldOptional.isEmpty()) {
			throw new ResourceNotFoundException("Rubro no encontrado.");
		}

		Field fieldToReplace = fieldOptional.get();

		fieldToReplace.setName(field.getName());

		fieldRepository.save(fieldToReplace);
	}

}
