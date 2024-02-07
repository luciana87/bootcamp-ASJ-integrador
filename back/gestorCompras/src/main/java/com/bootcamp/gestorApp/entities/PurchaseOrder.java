package com.bootcamp.gestorApp.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.aspectj.weaver.bcel.FakeAnnotation;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.engine.transaction.jta.platform.internal.BitronixJtaPlatform;
import org.modelmapper.internal.bytebuddy.asm.Advice.This;

import com.bootcamp.gestorApp.utils.Util;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "purchase_order")
public class PurchaseOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique = true, nullable = false)
	private int numOrder;
	
	@Column(nullable = false)
	@CreationTimestamp
	private LocalDateTime createdAt;
	
	@UpdateTimestamp
	private LocalDateTime updatedAt;
	private LocalDateTime deadline;
	private double total;
	private boolean canceled;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "supplier_id")
	private Supplier supplier;
	
    @OneToMany(mappedBy = "purchaseOrder", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    private List<ItemDetail> items;
	
	public PurchaseOrder () {}

	
	
	public PurchaseOrder(Integer id, int numOrder, LocalDateTime createdAt, LocalDateTime updatedAt,
			LocalDateTime deadline, double total, boolean canceled, String description, Supplier supplier,
			List<ItemDetail> items) {
		this.id = id;
		this.numOrder = numOrder;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deadline = deadline;
		this.total = total;
		this.canceled = canceled;
		this.description = description;
		this.supplier = supplier;
		this.items = items;
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

	public List<ItemDetail> getItems() {
		return items;
	}

	public void setItems(List<ItemDetail> items) {
		this.items = items;
	}

	public Integer getNumOrder() {
		return numOrder;
	}

	public void setNumOrder(int numOrder) {
		this.numOrder = numOrder;
	}

	public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
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

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public int getId() {
		return id;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	
	/*
	 * @PreUpdate protected void onUpdate() { LocalDateTime now =
	 * LocalDateTime.now(); String formattedDateTime =
	 * now.format(Util.getDateTimeFormatter()); this.updatedAt =
	 * LocalDateTime.parse(formattedDateTime, Util.getDateTimeFormatter()); }
	 * 
	 */
}
