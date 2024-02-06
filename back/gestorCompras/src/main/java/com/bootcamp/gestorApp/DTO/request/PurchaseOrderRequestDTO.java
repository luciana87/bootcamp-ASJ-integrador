package com.bootcamp.gestorApp.DTO.request;

import java.util.List;

import org.springframework.boot.autoconfigure.condition.ConditionMessage.ItemsBuilder;

import com.bootcamp.gestorApp.entities.ItemDetail;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotNull;


public class PurchaseOrderRequestDTO {


    @NotNull (message = "Order number may not be empty")
	@JsonProperty("num_order")
	private int numOrder;
    
	private double total;
	private String description;
	
	@JsonProperty("created_at")
	private String createdAt;
	
	private String deadline;
	
	@JsonProperty("supplier_id")
	private Integer supplierId;
	
	private List<ItemDetail> items;

	public PurchaseOrderRequestDTO() {}



	public PurchaseOrderRequestDTO( int numOrder, double total,
			String description, String createdAt, String deadline, Integer supplierId, List<ItemDetail> items) {
		this.numOrder = numOrder;
		this.total = total;
		this.description = description;
		this.createdAt = createdAt;
		this.deadline = deadline;
		this.supplierId = supplierId;
		this.items = items;
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



	public String getCreatedAt() {
		return createdAt;
	}



	public void setCreatedAt(String createdAt) {
		this.createdAt = createdAt;
	}



	public String getDeadline() {
		return deadline;
	}



	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}



	public Integer getSupplierId() {
		return supplierId;
	}



	public void setSupplierId(Integer supplierId) {
		this.supplierId = supplierId;
	}



	public List<ItemDetail> getItems() {
		return items;
	}



	public void setItems(List<ItemDetail> items) {
		this.items = items;
	}




	

}
