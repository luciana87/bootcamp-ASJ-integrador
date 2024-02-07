package com.bootcamp.gestorApp.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.ContactRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Contact;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.ContactRepository;
import com.bootcamp.gestorApp.utils.Util;

import jakarta.transaction.Transactional;


@Service
public class ContactService {
	
	private ContactRepository contactRepository;
	
	public ContactService(ContactRepository contactRepository) {
		this.contactRepository = contactRepository;
	}

	@Transactional
	public Contact create(ContactRequestDTO contactDTO) {
		Contact contactSaved = mapToEntity(contactDTO);
		return contactRepository.save(contactSaved);
	}

	public Contact findById(Integer id) {
		Optional<Contact> contactOptional =contactRepository.findById(id);
		 if (contactOptional.isEmpty()){
	            throw new ResourceNotFoundException("Contacto no encontrado.");
	        }
		return contactOptional.get();
	}	
	
	public ContactRequestDTO mapToDTO(Contact contact) {
		return new ContactRequestDTO(contact.getContactName(), contact.getContactLastname(), contact.getPhoneNumber(), 
									  contact.getContactEmail(), contact.getPosition());
	}
	
	private Contact mapToEntity(ContactRequestDTO contactDTO) {
		Contact contact = Util.getModelMapper().map(contactDTO, Contact.class);
		return contact;
	}



	
}
