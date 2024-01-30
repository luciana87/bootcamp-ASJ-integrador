package com.bootcamp.gestorApp.DTO.response;

import java.time.LocalDateTime;

import com.bootcamp.gestorApp.entities.Category;
import com.bootcamp.gestorApp.entities.Supplier;


public class ProductResponseDTO {

	private String name;
	private String sku;
	private float price;
	private String description;
	private String image;
	private LocalDateTime updatedAt;
	private LocalDateTime createdAt;
	private boolean deleted;
	private Category category;
	private Supplier supplier;
	
	public ProductResponseDTO(String name, String sku, float price, String description, String image,
			LocalDateTime updatedAt, LocalDateTime createdAt, boolean deleted, Category category, Supplier supplier) {

		this.name = name;
		this.sku = sku;
		this.price = price;
		this.description = description;
		this.image = image;
		this.updatedAt = updatedAt;
		this.createdAt = createdAt;
		this.deleted = deleted;
		this.category = category;
		this.supplier = supplier;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSku() {
		return sku;
	}

	public void setSku(String sku) {
		this.sku = sku;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}
	
	
	
	

}
