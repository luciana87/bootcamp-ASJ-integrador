package com.bootcamp.gestorApp.services;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.ContactRequestDTO;
import com.bootcamp.gestorApp.entities.Contact;
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

	private Contact mapToEntity(ContactRequestDTO contactDTO) {
		Contact contact = Util.getModelMapper().map(contactDTO, Contact.class);
		return contact;
	}	
	
}
