package com.bootcamp.gestorApp.DTO.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public class CategoryRequestDTO {

	 @NotEmpty (message = "Name may not be empty.")
	 @NotBlank(message = "Name is required.")
	 private String name;
	 
	 public CategoryRequestDTO() {}

	public CategoryRequestDTO(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	 
}
