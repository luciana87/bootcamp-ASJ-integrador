package com.bootcamp.gestorApp.DTO.request;

public class SupplierRequestDTO {


	private String code;
	private String businessName;
	private String cuit;
	private String field;
	private String website;
	private String phone_number;
	private String email;
	private String logo;
	
	private Integer addressId;
	private Integer ivaId;
	private Integer contactId;
	
	
	public SupplierRequestDTO() {}


	public SupplierRequestDTO(String code, String businessName, String cuit, String field, String website,
			String phone_number, String email, String logo, Integer addressId, Integer ivaId, Integer contactId) {
		this.code = code;
		this.businessName = businessName;
		this.cuit = cuit;
		this.field = field;
		this.website = website;
		this.phone_number = phone_number;
		this.email = email;
		this.logo = logo;
		this.addressId = addressId;
		this.ivaId = ivaId;
		this.contactId = contactId;
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


	public Integer getAddressId() {
		return addressId;
	}


	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}


	public Integer getIvaId() {
		return ivaId;
	}


	public void setIvaId(Integer ivaId) {
		this.ivaId = ivaId;
	}


	public Integer getContactId() {
		return contactId;
	}


	public void setContactId(Integer contactId) {
		this.contactId = contactId;
	}
	
	
	
	
	
	
}
