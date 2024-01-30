package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.entities.Province;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.ProvinceRepository;

@Service
public class ProvinceService {

	private ProvinceRepository provinceRepository;

	public ProvinceService(ProvinceRepository provinceRepository) {
		this.provinceRepository = provinceRepository;
	}

	public List<Province> retrieveAll() {
		return provinceRepository.findAll();
	}

	public Province findById(Integer id) {
		Optional<Province> provinceOptional = provinceRepository.findById(id);
		if (provinceOptional.isEmpty()) {
			throw new ResourceNotFoundException("COndición de iva no encontrada.");		
		}
		return provinceOptional.get();
	}
	
	
}
