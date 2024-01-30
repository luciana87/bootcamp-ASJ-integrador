package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.AddressRequestDTO;
import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ProductResponseDTO;
import com.bootcamp.gestorApp.entities.Address;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.AddressRepository;
import com.bootcamp.gestorApp.utils.Util;

import jakarta.transaction.Transactional;

@Service
public class AddressService {
	
	private AddressRepository addressRepository;
	
	public AddressService(AddressRepository addressRepository) {
		this.addressRepository = addressRepository;
	}

	public Address retriveById(Integer id) {
		Optional<Address> addressOptional = addressRepository.findById(id);
		if (addressOptional.isEmpty()) {
			throw new ResourceNotFoundException("Dirección no encontrado.");
		}
		return addressOptional.get();
	}

	@Transactional
	public Address create(AddressRequestDTO addressDTO) {
		Address addressSaved = mapToEntity(addressDTO);
		return addressRepository.save(addressSaved);
	}
	
    private Address mapToEntity(AddressRequestDTO addressDTO) {
    	Address address = Util.getModelMapper().map(addressDTO, Address.class);
	    return address;
    }

	public List<Address> retrieveAll() {
		return addressRepository.findAll();
	}

	/*
	 * private AddressRequestDTO mapToDTO(Address address) { AddressRequestDTO
	 * addressDTO = Util.getModelMapper().map(address, AddressRequestDTO.class);
	 * return addressDTO; }
	 */

}
