package com.bootcamp.gestorApp.DTO.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;


public class PurchaseOrderRequestDTO {


    @NotEmpty (message = "Order number may not be empty")
	@NotBlank(message = "Order number is required.")
	@JsonProperty("num_order")
	private int numOrder;
    
	private double total;
	private String description;
	
	@JsonProperty("created_at")
	private String createdAt;
	
	private String deadline;
	
	@JsonProperty("supplier_id")
	private Integer supplierId;
	
	@JsonProperty("product_id")
	private Integer productId;

	public PurchaseOrderRequestDTO() {}



	public PurchaseOrderRequestDTO(int numOrder, double total, String description, String createdAt, String deadline, Integer supplierId, Integer productId) {

		this.numOrder = numOrder;
		this.total = total;
		this.description = description;
		this.createdAt = createdAt;
		this.deadline = deadline;
		this.supplierId = supplierId;
		this.productId = productId;
	}



	public int getNumOrder() {
		return numOrder;
	}

	public void setNumOrder(int numOrder) {
		this.numOrder = numOrder;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(Integer supplierId) {
		this.supplierId = supplierId;
	}

	public Integer getProductId() {
		return productId;
	}

	public void setProductId(Integer productId) {
		this.productId = productId;
	}


	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}



	public String getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}
	
	

}
