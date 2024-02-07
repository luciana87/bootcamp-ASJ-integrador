package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.IvaRequestDTO;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.entities.IvaType;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.IvaRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class IvaService {
	
	private IvaRepository ivaRepository;
	
	public IvaService(IvaRepository ivaRepository) {
		this.ivaRepository = ivaRepository;
	}

	public IvaType findById(Integer id) {
		Optional<IvaType> ivaOptional = ivaRepository.findById(id);
		if (ivaOptional.isEmpty()) {
			throw new ResourceNotFoundException("Condición de iva no encontrada.");		
		}
		return ivaOptional.get();
	}

	public List<IvaType> retrieveAll() {
		return ivaRepository.findAll();
	}

	@Transactional
	public IvaType create(@Valid IvaRequestDTO ivaDTO) {
		IvaType iva = new IvaType(ivaDTO.getName());
		return ivaRepository.save(iva);
	}

	public Integer mapToDTO(IvaType iva) {

		return null;
	}

}
