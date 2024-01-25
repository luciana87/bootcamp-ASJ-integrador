package com.bootcamp.gestorApp.DTO.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class SupplierRequestDTO {


    @NotEmpty (message = "Code may not be empty")
	@NotBlank(message = "Code is required.")
    @Size (min = 4, max = 30, message = "Code must be more than 4 and must be less than 30 characters long")
	private String code;
    
    @NotEmpty (message = "Code may not be empty")
	@NotBlank(message = "Code is required.")
    @Size (min = 4, max = 60, message = "Code must be more than 4 and must be less than 30 characters long")
	private String businessName;
    
    @NotBlank(message = "CUIT is requiered.")
    @Pattern(regexp = "\\d{2}-\\d{8}-\\d{1}", message = "Invalid CUIT.")
	private String cuit;
	
    @NotEmpty (message = "Code may not be empty")
	@NotBlank(message = "Code is required.")
    @Size (min = 3, max = 60, message = "Code must be more than 4 and must be less than 30 characters long")
	private String field;
    
    @Pattern(regexp = "^(http|https)://.*$", message = "Invalid URL.")
	private String website;
    
    @NotEmpty (message = "Phone number may not be empty")
	@NotBlank(message = "Phone number is required.")
    @Size (min = 10, max = 25, message = "Phone number must be more than 10 and must be less than 25 characters long")
	private String phone_number;
    
    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email")
	private String email;
    
	private String logo;
	
	@NotBlank(message = "Address is required.")
	private AddressRequestDTO addressDTO;
	
	@JsonProperty("iva_id")
	@NotBlank(message = "Iva type is required.")
	private Integer ivaId;
	
	@NotBlank(message = "Contact is required.")
	private ContactRequestDTO contactDTO;
	
	
	public SupplierRequestDTO() {}


	public SupplierRequestDTO(String code, String businessName, String cuit, String field, String website,
			String phone_number, String email, String logo, AddressRequestDTO addressDTO, Integer ivaId, ContactRequestDTO contactDTO) {
		this.code = code;
		this.businessName = businessName;
		this.cuit = cuit;
		this.field = field;
		this.website = website;
		this.phone_number = phone_number;
		this.email = email;
		this.logo = logo;
		this.addressDTO = addressDTO;
		this.ivaId = ivaId;
		this.contactDTO = contactDTO;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getBusinessName() {
		return businessName;
	}


	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}


	public String getCuit() {
		return cuit;
	}


	public void setCuit(String cuit) {
		this.cuit = cuit;
	}


	public String getField() {
		return field;
	}


	public void setField(String field) {
		this.field = field;
	}


	public String getWebsite() {
		return website;
	}


	public void setWebsite(String website) {
		this.website = website;
	}


	public String getPhone_number() {
		return phone_number;
	}


	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getLogo() {
		return logo;
	}


	public void setLogo(String logo) {
		this.logo = logo;
	}


	public AddressRequestDTO getAddressDTO() {
		return addressDTO;
	}


	public void setAddressDTO(AddressRequestDTO addressDTO) {
		this.addressDTO = addressDTO;
	}


	public Integer getIvaId() {
		return ivaId;
	}


	public void setIvaId(Integer ivaId) {
		this.ivaId = ivaId;
	}


	public ContactRequestDTO getContactDTO() {
		return contactDTO;
	}


	public void setContactDTO(ContactRequestDTO contactDTO) {
		this.contactDTO = contactDTO;
	}
	
	
}
