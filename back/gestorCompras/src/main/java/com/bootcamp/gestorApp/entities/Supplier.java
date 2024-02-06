package com.bootcamp.gestorApp.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.bootcamp.gestorApp.utils.Util;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "suppliers")
public class Supplier {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column(unique = true, nullable = false)
	private String code;

	@Column(unique = true)
	private String businessName;

	@Column(unique = true)
	private String cuit;

	@ManyToOne
	@JoinColumn(name = "field_id")
	private Field field;

	private String website;
	private String phoneNumber;
	private String email;
	private String logo;

	@Column(nullable = false)
	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;
	private boolean deleted;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;

	@ManyToOne
	@JoinColumn(name = "iva_id")
	private IvaType iva;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "contact_id")
	private Contact contact;

	/*
	 * @OneToMany(mappedBy = "supplier", fetch = FetchType.EAGER) private
	 * List<Product> products;
	 */

	public Supplier() {
		this.createdAt = LocalDateTime.now();
		this.updatedAt = null;
		this.deleted = false;
	}

	public Supplier(String code, String businessName, String cuit, Field field, String website, String phoneNumber,
			String email, String logo, Address address, IvaType iva, Contact contact) {
		this.code = code;
		this.businessName = businessName;
		this.cuit = cuit;
		this.field = field;
		this.website = website;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.logo = logo;
		this.createdAt = LocalDateTime.now();
		this.updatedAt = null;
		this.deleted = false;
		this.address = address;
		this.iva = iva;
		this.contact = contact;

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Field getField() {
		return field;
	}

	public void setField(Field field) {
		this.field = field;
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

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
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

	@PreUpdate
	protected void onUpdate() {
		LocalDateTime now = LocalDateTime.now();
		String formattedDateTime = now.format(Util.getDateTimeFormatter());
		this.updatedAt = LocalDateTime.parse(formattedDateTime, Util.getDateTimeFormatter());
	}

}
