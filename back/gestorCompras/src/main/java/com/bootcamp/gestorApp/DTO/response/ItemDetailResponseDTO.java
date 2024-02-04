package com.bootcamp.gestorApp.DTO.response;

import com.bootcamp.gestorApp.entities.Product;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemDetailResponseDTO {
	
	private Integer id;
	private int amount;
	private double total;
	private Product product;	
	
	
	public ItemDetailResponseDTO() {}

	public ItemDetailResponseDTO(Integer id, int amount, double total, Product product) {
		this.id = id;
		this.amount = amount;
		this.total = total;
		this.product = product;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
}
