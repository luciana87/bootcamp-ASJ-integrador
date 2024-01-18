package entity;

import java.time.LocalDateTime;

public class Supplier {
	private int id;
	private String code;
	private String cuit;
	private String filed;
	private String website;
	private String phone_number;
	private String email;
	private String logo;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private boolean deleted;
	private Address address;
	private IvaType iva;
	private Contact contact;
	
	public Supplier () {}
	
	public Supplier (String code, String cuit, String filed, String website, 
			String phone_number, String email, String logo, Address address, 
			IvaType iva, Contact contact) {
		this.code = code;
		this.cuit = cuit;
		this.filed = filed;
		this.website = website;
		this.phone_number = phone_number;
		this.email = email;
		this.logo = logo;
		this.createdAt = LocalDateTime.now();
		this.updatedAt = null;
		this.deleted = false;
		this.address = address;
		this.iva = iva;
		this.contact = contact;
		
		
	}
	
	public int getId() {
		return id;
	}
	
	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getCuit() {
		return cuit;
	}

	public void setCuit(String cuit) {
		this.cuit = cuit;
	}

	public String getFiled() {
		return filed;
	}

	public void setFiled(String filed) {
		this.filed = filed;
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

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public boolean getDeleted() {
		return deleted;
	}
	
	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public IvaType getIva() {
		return iva;
	}

	public void setIva(IvaType iva) {
		this.iva = iva;
	}

	public Contact getContact() {
		return contact;
	}

	public void setContact(Contact contact) {
		this.contact = contact;
	}
	
	
	

}
