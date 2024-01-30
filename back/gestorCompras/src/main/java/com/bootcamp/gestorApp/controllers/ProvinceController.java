package com.bootcamp.gestorApp.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.entities.Country;
import com.bootcamp.gestorApp.entities.Province;
import com.bootcamp.gestorApp.services.ProvinceService;

@RestController
@RequestMapping(path = "/provinces")
@CrossOrigin(origins = "http://localhost:4200")
public class ProvinceController {
	
	private ProvinceService provinceService;

	public ProvinceController(ProvinceService provinceService) {
		this.provinceService = provinceService;
	}
	
	@GetMapping
	public ResponseEntity<List<Province>> retrieve() {
		return new ResponseEntity<List<Province>>(provinceService.retrieveAll(),HttpStatus.OK);
	}
	
	

}
