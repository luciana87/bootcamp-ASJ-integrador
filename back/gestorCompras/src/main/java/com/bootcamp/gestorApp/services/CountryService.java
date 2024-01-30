package com.bootcamp.gestorApp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.entities.Country;
import com.bootcamp.gestorApp.repositories.CountryRepository;

@Service
public class CountryService {
	
	private CountryRepository countryRepository;
	
	public CountryService(CountryRepository countryRepository) {
		this.countryRepository = countryRepository;
	}

	public List<Country> retrieveAll() {
		return countryRepository.findAll();
	}

}
