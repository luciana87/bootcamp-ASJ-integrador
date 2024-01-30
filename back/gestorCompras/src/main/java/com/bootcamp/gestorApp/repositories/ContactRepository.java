package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer>{

}
