package com.bootcamp.gestorApp.entities;

import java.time.LocalDateTime;
import java.util.List;

import com.bootcamp.gestorApp.utils.Util;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PreUpdate;
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
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	private boolean deleted;

/*
    @OneToMany(mappedBy = "category", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    private List<Product> products;
*/	
	
	public Category () {}
	
	public Category (String name) {
		this.name = name;
		this.createdAt = LocalDateTime.now();
		this.updatedAt = null;
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

	   @PreUpdate
	    protected void onUpdate() {
	        LocalDateTime now = LocalDateTime.now();
	        String formattedDateTime = now.format(Util.getDateTimeFormatter());
	        this.updatedAt = LocalDateTime.parse(formattedDateTime, Util.getDateTimeFormatter());
	    }

}
