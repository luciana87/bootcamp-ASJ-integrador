package com.bootcamp.gestorApp.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.entities.IvaType;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.IvaRepository;

@Service
public class IvaService {
	
	private IvaRepository ivaRepository;
	
	public IvaService(IvaRepository ivaRepository) {
		this.ivaRepository = ivaRepository;
	}

	public IvaType findById(Integer id) {
		Optional<IvaType> ivaOptional = ivaRepository.findById(id);
		if (ivaOptional.isEmpty()) {
			throw new ResourceNotFoundException("COndición de iva no encontrada.");		
		}
		return ivaOptional.get();
	}

}
