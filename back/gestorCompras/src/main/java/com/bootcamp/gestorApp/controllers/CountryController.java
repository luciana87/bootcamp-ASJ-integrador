package com.bootcamp.gestorApp.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.entities.Country;
import com.bootcamp.gestorApp.services.CountryService;

@RestController
@RequestMapping(path = "/countries")
@CrossOrigin(origins = "http://localhost:4200")
public class CountryController {
	
	private CountryService countryService;
	
	public CountryController(CountryService countryService) {
		this.countryService = countryService;
	}
	
	@GetMapping
	public ResponseEntity<List<Country>> retrieve() {
		return new ResponseEntity<List<Country>>(countryService.retrieveAll(),HttpStatus.OK);
	}

}
