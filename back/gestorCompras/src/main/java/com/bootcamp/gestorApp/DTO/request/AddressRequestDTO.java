package com.bootcamp.gestorApp.DTO.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class AddressRequestDTO {
	
    @NotEmpty (message = "Street may not be empty")
	@NotBlank(message = "Street is required.")
    @Size (min = 4, max = 100, message = "Street must be more than 4 and must be less than 100 characters long")
	private String street;
    
    @NotEmpty (message = "Number may not be empty")
	@NotBlank(message = "Number is required.")
    @Size (max = 6, message = "Number code must be less than 6 characters long")
	private int num;
    
    @NotEmpty (message = "Postal code may not be empty")
	@NotBlank(message = "Postal code is required.")
    @Size (min = 4, max = 6, message = "Postal code must be more than 4 and must be less than 6 characters long")
	@JsonProperty("postal_code")
	private String postalCode;
    
    @NotEmpty (message = "City may not be empty")
	@NotBlank(message = "City is required.")
    @Size (min = 4, max = 60, message = "City must be more than 4 and must be less than 60 characters long")    
	private String city;
    
	@JsonProperty("province_id")
	private Integer provinceId;
	
	public AddressRequestDTO() {}
	
	public AddressRequestDTO(String street, Integer num, String postalCode, String city, Integer provinceId) {
		this.street = street;
		this.num = num;
		this.postalCode = postalCode;
		this.city = city;
		this.provinceId = provinceId;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public Integer getProvinceId() {
		return provinceId;
	}

	public void setProvinceId(Integer provinceId) {
		this.provinceId = provinceId;
	}

	
}
