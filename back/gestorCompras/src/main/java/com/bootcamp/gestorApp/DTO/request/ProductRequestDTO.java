package com.bootcamp.gestorApp.DTO.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class ProductRequestDTO {

    @NotEmpty (message = "Name may not be empty")
	@NotBlank(message = "Name is required.")
    @Size (min = 4, message = "Name must be more than 4 characters long")
	private String name;
    
    @NotEmpty (message = "SKU may not be empty")
	@NotBlank(message = "SKU is required.")
    @Size (min = 3, message = "Name must be more than 3 characters long")
	private String sku;
    
    @NotNull(message = "El precio no puede ser nulo")
    @DecimalMin(value = "0.00", message = "Price must be greater than 0 ")
	private float price;
    
	private String description;
	
	private String image;
	
	@JsonProperty("category_id")
	private Integer categoryId;
	
	@JsonProperty("supplier_id")
	private Integer supplierId;


	public ProductRequestDTO() {}


	public ProductRequestDTO( String name, String sku, float price, String description, String image, Integer categoryId, Integer supplierId) {
		
		this.name = name;
		this.sku = sku;
		this.price = price;
		this.description = description;
		this.image = image;
		this.categoryId = categoryId;
		this.supplierId = supplierId;
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


	public Integer getCategoryId() {
		return categoryId;
	}


	public void setCategoryId(Integer categoryId) {
		this.categoryId = categoryId;
	}


	public Integer getSupplierId() {
		return supplierId;
	}


	public void setSupplierId(Integer supplierId) {
		this.supplierId = supplierId;
	}
	
	
}
