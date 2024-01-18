package entity;

import java.time.LocalDateTime;

public class Category {
	
	private int id;
	private String name;
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	private boolean deleted;
	
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

	

}
