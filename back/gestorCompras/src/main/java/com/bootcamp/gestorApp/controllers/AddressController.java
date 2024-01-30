package com.bootcamp.gestorApp.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.entities.Address;
import com.bootcamp.gestorApp.services.AddressService;

@RestController
@RequestMapping(path = "/addresses")
@CrossOrigin(origins = "http://localhost:4200")
public class AddressController {
	
	private AddressService addressService;
	
	public AddressController(AddressService addressService) {
		this.addressService = addressService;
	}

	@GetMapping
	public ResponseEntity<List<Address>> retrieve() {
		return new ResponseEntity<List<Address>>(addressService.retrieveAll(),HttpStatus.OK);
	}
}
