package com.bootcamp.gestorApp.entities;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "category")
public class Category {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false)
	private String name;

	@Column(nullable = false)
	@CreationTimestamp
	private LocalDateTime createdAt;

	@UpdateTimestamp
	private LocalDateTime updatedAt;
	private boolean deleted;

	/*
	 * @OneToMany(mappedBy = "category", fetch = FetchType.EAGER, cascade =
	 * CascadeType.REMOVE) private List<Product> products;
	 */

	public Category() {
	}

	public Category(String name) {
		this.name = name;
		this.deleted = false;
	}


	public Category(String name, LocalDateTime createdAt, LocalDateTime updatedAt, boolean deleted) {
		this.name = name;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deleted = false;
	}



	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
	}

	public boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}


}
