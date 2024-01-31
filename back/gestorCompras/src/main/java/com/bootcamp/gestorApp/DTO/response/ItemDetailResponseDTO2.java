package com.bootcamp.gestorApp.DTO.response;

import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemDetailResponseDTO2 {
	
	private Integer id;
	private double price;
	private int amount;
	private double total;
	
	@JsonProperty("product_nid")
	private Product product;
	
	@JsonProperty("purchase_order_id")
	private PurchaseOrder purchaseOrder;	
	
	
	public ItemDetailResponseDTO2() {}

	public ItemDetailResponseDTO2(Integer id, double price, int amount, double total, Product product,
			PurchaseOrder purchaseOrder) {
		this.id = id;
		this.price = price;
		this.amount = amount;
		this.total = total;
		this.product = product;
		this.purchaseOrder = purchaseOrder;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
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

	public PurchaseOrder getPurchaseOrder() {
		return purchaseOrder;
	}

	public void setPurchaseOrder(PurchaseOrder purchaseOrder) {
		this.purchaseOrder = purchaseOrder;
	}
	
	

}
