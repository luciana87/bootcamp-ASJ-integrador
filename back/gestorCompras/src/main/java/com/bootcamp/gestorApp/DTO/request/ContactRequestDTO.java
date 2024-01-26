package com.bootcamp.gestorApp.DTO.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class ContactRequestDTO {

    @NotEmpty (message = "Contact name may not be empty")
	@NotBlank(message = "Contact name is required.")
    @Size (min = 3, max = 60, message = "Contact name must be more than 3 and must be less than 30 characters long")
	@JsonProperty("contact_name")
	private String contactName;
    
    @NotEmpty (message = "Contact lastname may not be empty")
	@NotBlank(message = "Contact lastname is required.")
    @Size (min = 3, max = 60, message = "Contact lastname must be more than 3 and must be less than 30 characters long")
	@JsonProperty("contact_lastname")
	private String contactLastname;
    
    @NotEmpty (message = "Contact phone number may not be empty")
	@NotBlank(message = "Contact phone number is required.")
    @Size (min = 10, max = 25, message = "Contact phone number must be more than 10 and must be less than 25 characters long")
	@JsonProperty("phone_number")
	private String phoneNumber;
    
    @NotBlank(message = "Correo es requerido.")
    @Email(regexp = "[a-zA-Z0-9_.]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}", message = "Invalid email.")
	private String email;
    
    @NotEmpty (message = "Position may not be empty")
	@NotBlank(message = "Position is required.")
    @Size (min = 3, message = "Position must be more than 3 characters long")
	private String position;
	
	
	public ContactRequestDTO(String contactName, String contactLastname, String phoneNumber, String email,
			String position) {
		this.contactName = contactName;
		this.contactLastname = contactLastname;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.position = position;
	}


	public String getContactName() {
		return contactName;
	}


	public void setContactName(String contactName) {
		this.contactName = contactName;
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
	
	
	

}
