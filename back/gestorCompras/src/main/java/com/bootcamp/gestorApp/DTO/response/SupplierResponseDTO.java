package com.bootcamp.gestorApp.DTO.response;

import com.bootcamp.gestorApp.DTO.request.ContactRequestDTO;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public class SupplierResponseDTO {
	


    @NotEmpty (message = "Code may not be empty")
	@NotBlank(message = "Code is required.")
    @Size (min = 4, max = 30, message = "Code must be more than 4 and must be less than 30 characters long")
	private String code;
    
    @NotEmpty (message = "Code may not be empty")
	@NotBlank(message = "Code is required.")
    @Size (min = 4, max = 60, message = "Code must be more than 4 and must be less than 30 characters long")
	@JsonProperty("business_name")
	private String businessName;
    
    @NotBlank(message = "CUIT is requiered.")
    @Pattern(regexp = "\\d{2}-\\d{8}-\\d{1}", message = "Invalid CUIT.")
	private String cuit;
	
	@JsonProperty("field_name")
	private String fieldName;

    @Pattern(regexp = "^(http|https)://.*$", message = "Invalid URL.")
	private String website;
    
    @NotEmpty (message = "Phone number may not be empty")
	@NotBlank(message = "Phone number is required.")
    @Size (min = 10, max = 25, message = "Phone number must be more than 10 and must be less than 25 characters long")
	@JsonProperty("phone_number")
	private String phoneNumber;
    
    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email")
	private String email;
    
	private String logo;
	
	@JsonProperty("address")
	private AddressResponseDTO addressDTO;
	
	@JsonProperty("iva_name")
	private Integer iva_name;
	
	@JsonProperty("contact")
	private ContactRequestDTO contactDTO;
	@JsonProperty("created_at")
	private String createdAt;
	
	@JsonProperty("updated_at")
	private String updatedAt;
	
	private boolean deleted;
	
	
	public SupplierResponseDTO() {}


	public SupplierResponseDTO(String code, String businessName, String cuit,String fieldName, String website, String phoneNumber,
								String email, String logo, AddressResponseDTO addressDTO, Integer iva_name, ContactRequestDTO contactDTO, 
								String createdAt, String updatedAt, boolean deleted) {

		this.code = code;
		this.businessName = businessName;
		this.cuit = cuit;
		this.fieldName = fieldName;
		this.website = website;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.logo = logo;
		this.addressDTO = addressDTO;
		this.iva_name = iva_name;
		this.contactDTO = contactDTO;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deleted = deleted;
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


	public String getFieldName() {
		return fieldName;
	}


	public void setFieldName(String fieldName) {
		this.fieldName = fieldName;
	}


	public String getWebsite() {
		return website;
	}


	public void setWebsite(String website) {
		this.website = website;
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


	public String getLogo() {
		return logo;
	}


	public void setLogo(String logo) {
		this.logo = logo;
	}


	public AddressResponseDTO getAddressDTO() {
		return addressDTO;
	}


	public void setAddressDTO(AddressResponseDTO addressDTO) {
		this.addressDTO = addressDTO;
	}


	public Integer getIva_name() {
		return iva_name;
	}


	public void setIva_name(Integer iva_name) {
		this.iva_name = iva_name;
	}


	public ContactRequestDTO getContactDTO() {
		return contactDTO;
	}


	public void setContactDTO(ContactRequestDTO contactDTO) {
		this.contactDTO = contactDTO;
	}


	public String getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}


	public String getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(String updatedAt) {
		this.updatedAt = updatedAt;
	}


	public boolean isDeleted() {
		return deleted;
	}


	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	
}
