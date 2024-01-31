package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.AddressRequestDTO;
import com.bootcamp.gestorApp.DTO.request.ContactRequestDTO;
import com.bootcamp.gestorApp.DTO.request.ProductRequestDTO;
import com.bootcamp.gestorApp.DTO.request.SupplierRequestDTO;
import com.bootcamp.gestorApp.DTO.response.AddressResponseDTO;
import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.DTO.response.PurchaseOrderResponseDTO;
import com.bootcamp.gestorApp.DTO.response.SupplierResponseDTO;
import com.bootcamp.gestorApp.entities.Address;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Contact;
import com.bootcamp.gestorApp.entities.Country;
import com.bootcamp.gestorApp.entities.Field;
import com.bootcamp.gestorApp.entities.IvaType;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.Province;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
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
	private FieldService fieldService;
	

	
	public SupplierService(SupplierRepository supplierRepository, ContactService contactService,
			AddressService addressService, IvaService ivaService, ProvinceService provinceService,
			FieldService fieldService) {

		this.supplierRepository = supplierRepository;
		this.contactService = contactService;
		this.addressService = addressService;
		this.ivaService = ivaService;
		this.provinceService = provinceService;
		this.fieldService = fieldService;
	}


	public Supplier retriveById(Integer id) {

		Optional<Supplier> supplierOptional = supplierRepository.findById(id);
		 if (supplierOptional.isEmpty()){
	            throw new ResourceNotFoundException("¨Proveedor no encontrado.");
	        }
		return supplierOptional.get();
	}
	

	public SupplierResponseDTO retriveDetailById(Integer id) {
		Optional<Supplier> supplierOptional = supplierRepository.findById(id);
		 if (supplierOptional.isEmpty()){
	            throw new ResourceNotFoundException("Proveedor no encontrado.");
	        }
		return mapToDTO(supplierOptional.get());
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
		Field field = fieldService.findById(supplierDTO.getFieldId());
		Province province = provinceService.findById(supplierDTO.getAddressDTO().getProvinceId());
		
		Supplier supplier = mapToEntity(supplierDTO,address,contact,ivaType,field,province);
	
		return supplierRepository.save(supplier);
	}

	private SupplierResponseDTO mapToDTO(Supplier supplier) {
		SupplierResponseDTO supplierResponseDTO = Util.getModelMapper().map(supplier, SupplierResponseDTO.class);
		
		Field field = fieldService.findById(supplier.getField().getId()); 
		AddressResponseDTO addressResponseDTO = addressService.mapToResponseDTO(supplier.getAddress());
		ContactRequestDTO contactDTO =  contactService.mapToDTO(supplier.getContact());
		 
		supplierResponseDTO.setAddressDTO(addressResponseDTO);
		supplierResponseDTO.setFieldName(field.getName());
		supplierResponseDTO.setContactDTO(contactDTO);
		//supplierResponseDTO.setIva_name(ivaService.mapToDTO(supplier.getIva()));
		
		return supplierResponseDTO;
	}

	private Supplier mapToEntity(SupplierRequestDTO supplierDTO, Address address, Contact contact, IvaType ivaType, Field field, Province province) {
		Supplier supplier = new Supplier(supplierDTO.getCode(),supplierDTO.getBusinessName(), supplierDTO.getCuit(), field, 
				supplierDTO.getWebsite(), supplierDTO.getPhoneNumber(), supplierDTO.getEmail(), supplierDTO.getLogo(), address, ivaType, contact);
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
