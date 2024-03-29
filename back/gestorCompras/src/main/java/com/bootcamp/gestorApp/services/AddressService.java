package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.AddressRequestDTO;
import com.bootcamp.gestorApp.DTO.response.AddressResponseDTO;
import com.bootcamp.gestorApp.entities.Address;
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
			throw new ResourceNotFoundException("Dirección no encontrada.");
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
	
	public AddressResponseDTO mapToResponseDTO(Address address) {
		return new AddressResponseDTO(address.getStreet(),address.getNum(), address.getPostalCode(), address.getCity(), 
										address.getProvince().getName(), address.getProvince().getCountry().getName());
	}

	/*
	 * private AddressRequestDTO mapToDTO(Address address) { AddressRequestDTO
	 * addressDTO = Util.getModelMapper().map(address, AddressRequestDTO.class);
	 * return addressDTO; }
	 */

}
