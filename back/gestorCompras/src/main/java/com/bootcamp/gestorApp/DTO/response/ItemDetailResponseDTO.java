package com.bootcamp.gestorApp.DTO.response;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ItemDetailResponseDTO {
	
	private Integer id;
	private double price;
	private int amount;
	private double total;
	
	@JsonProperty("product_name")
	private String productName;
	
	@JsonProperty("product_image")
	private String productImg;
	
	@JsonProperty("product_price")
	private double productPrice;	
	
	
	public ItemDetailResponseDTO() {}
	
	public ItemDetailResponseDTO(Integer id, double price, int amount, double total, String productName,
			String productImg, double productPrice) {

		this.id = id;
		this.price = price;
		this.amount = amount;
		this.total = total;
		this.productName = productName;
		this.productImg = productImg;
		this.productPrice = productPrice;
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

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductImg() {
		return productImg;
	}

	public void setProductImg(String productImg) {
		this.productImg = productImg;
	}

	public double getProductPrice() {
		return productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}
}
