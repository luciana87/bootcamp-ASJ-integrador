package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.ContactRequestDTO;
import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.request.SupplierRequestDTO;
import com.bootcamp.gestorApp.entities.Address;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Contact;
import com.bootcamp.gestorApp.entities.Country;
import com.bootcamp.gestorApp.entities.IvaType;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Province;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ExistingResourceException;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.SupplierRepository;
import com.bootcamp.gestorApp.utils.Util;

import jakarta.transaction.Transactional;

@Service
public class SupplierService {
	
	private SupplierRepository supplierRepository;
	private ContactService contactService;
	private AddressService addressService;
	private IvaService ivaService;
	private ProvinceService provinceService;
	
	public SupplierService (SupplierRepository supplierRepository,AddressService addressService, IvaService ivaService, 
							ContactService contactService, ProvinceService provinceService) {
		this.supplierRepository = supplierRepository;
		this.addressService = addressService;
		this.ivaService = ivaService;
		this.contactService = contactService;
		this.provinceService = provinceService;	}

	
	
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



	@Transactional
	public Supplier create(SupplierRequestDTO supplierDTO) {
		checkForExistingSupplier(supplierDTO.getCode());
		
		Address address = addressService.create(supplierDTO.getAddressDTO());
		Contact contact = contactService.create(supplierDTO.getContactDTO());
		IvaType ivaType = ivaService.findById(supplierDTO.getIvaId());
		Province province = provinceService.findById(supplierDTO.getAddressDTO().getProvinceId());
		
		Supplier supplier = mapToEntity(supplierDTO,address,contact,ivaType,province);
	
		return supplierRepository.save(supplier);
	}



	private Supplier mapToEntity(SupplierRequestDTO supplierDTO, Address address, Contact contact, IvaType ivaType, Province province) {
		Supplier supplier = Util.getModelMapper().map(supplierDTO,Supplier.class);
		supplier.setAddress(address);
		supplier.setContact(contact);
		supplier.setIva(ivaType);
		supplier.getAddress().setProvince(province);
		
		return supplier;
	}

	private void checkForExistingSupplier(String code) {
        if (supplierRepository.existsByCode(code)) {
            throw new ExistingResourceException();
        }
	}


	public void delete(Integer id) {
		Supplier supplier = this.retriveById(id);
		supplier.setDeleted(true);
		supplierRepository.save(supplier);
		//supplierRepository.deleteById(id);
	}

	
	

}
