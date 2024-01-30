package com.bootcamp.gestorApp.DTO.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class IvaRequestDTO {
	
	@NotEmpty (message = "Name may not be empty.")
	@NotBlank(message = "Name is required.")
	private String name;
	
	public IvaRequestDTO() {}

	public IvaRequestDTO(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
}
