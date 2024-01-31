package com.bootcamp.gestorApp.DTO.response;

import java.time.LocalDateTime;
import java.util.List;

import com.bootcamp.gestorApp.entities.ItemDetail;
import com.bootcamp.gestorApp.entities.Supplier;
import com.fasterxml.jackson.annotation.JsonProperty;

public class PurchaseOrderResponseDTO {

	private Integer id;
	
	@JsonProperty("num_order")
	private int numOrder;
	
	@JsonProperty("created_at")
	private LocalDateTime createdAt;
	
	@JsonProperty("updated_at")
	private LocalDateTime updatedAt;
	
	private LocalDateTime deadline;
	private float total;
	private boolean canceled;
	private String description;
	
	@JsonProperty("supplier_name")
	private String supplierName;
	
    private List<ItemDetailResponseDTO> itemsDTO;
    
    public PurchaseOrderResponseDTO() {}
    
	public PurchaseOrderResponseDTO(Integer id, int numOrder, LocalDateTime createdAt, LocalDateTime updatedAt,
			LocalDateTime deadline, float total, boolean canceled, String description, String supplierName,
			List<ItemDetailResponseDTO> itemsDTO) {
		this.id = id;
		this.numOrder = numOrder;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deadline = deadline;
		this.total = total;
		this.canceled = canceled;
		this.description = description;
		this.supplierName = supplierName;
		this.itemsDTO = itemsDTO;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getNumOrder() {
		return numOrder;
	}

	public void setNumOrder(int numOrder) {
		this.numOrder = numOrder;
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

	public LocalDateTime getDeadline() {
		return deadline;
	}

	public void setDeadline(LocalDateTime deadline) {
		this.deadline = deadline;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
		this.total = total;
	}

	public boolean isCanceled() {
		return canceled;
	}

	public void setCanceled(boolean canceled) {
		this.canceled = canceled;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}


	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public List<ItemDetailResponseDTO> getItemsDTO() {
		return itemsDTO;
	}

	public void setItemsDTO(List<ItemDetailResponseDTO> itemsDTO) {
		this.itemsDTO = itemsDTO;
	}
    
    
}
