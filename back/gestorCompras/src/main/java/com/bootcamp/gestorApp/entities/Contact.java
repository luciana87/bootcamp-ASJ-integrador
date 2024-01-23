package com.bootcamp.gestorApp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "contact")
public class Contact {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String contactName;
	private String contactLastname;
	private String phoneNumber;
	private String email;
	private String position;
	
	public Contact () {}

	public Contact(String contactName, String contactLastname, String phoneNumber, String email, String position) {
		this.contactName = contactName;
		this.contactLastname = contactLastname;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.position = position;
	}

	public String getContactLastname() {
		return contactLastname;
	}

	public void setContactLastname(String contactLastname) {
		this.contactLastname = contactLastname;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Integer getId() {
		return id;
	}

	public String getContactName() {
		return contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	
	

}
