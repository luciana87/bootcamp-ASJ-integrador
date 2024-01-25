package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.SupplierRequestDTO;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.SupplierRepository;

@Service
public class SupplierService {
	
	private SupplierRepository supplierRepository;
	
	public SupplierService (SupplierRepository supplierRepository) {
		this.supplierRepository = supplierRepository;
	}

	
	
	public Supplier retriveById(Integer supplierId) {

		Optional<Supplier> supplierOptional = supplierRepository.findById(supplierId);
		 if (supplierOptional.isEmpty()){
	            throw new ResourceNotFoundException("¨Proveedor no encontrado.");
	        }
		return supplierOptional.get();
	}
	
	public List<Supplier> retrieveAll() {
		return supplierRepository.findAll();
	}



	
	public Supplier create(SupplierRequestDTO supplierDTO) {
		return null;
	}
	
	

}
