package com.bootcamp.gestorApp.entities;

import java.time.LocalDateTime;
import java.util.List;

import org.aspectj.weaver.bcel.FakeAnnotation;
import org.hibernate.engine.transaction.jta.platform.internal.BitronixJtaPlatform;
import org.modelmapper.internal.bytebuddy.asm.Advice.This;

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
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	private LocalDateTime deadline;
	private float total;
	private boolean canceled;
	private String description;
	
	@ManyToOne
	@JoinColumn(name = "supplier_id")
	private Supplier supplier;
	
    @OneToMany(mappedBy = "purchaseOrder", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    private List<ItemDetail> items;
	
	public PurchaseOrder () {}

	public PurchaseOrder(int numOrder, float total, String description, Supplier supplier) {

		this.numOrder = numOrder;
		this.createdAt = LocalDateTime.now();
		this.deadline = createdAt.plusDays(10);
		this.updatedAt = null;
		this.canceled= false;
		this.total = total;
		this.canceled = false;
		this.description = description;
		this.supplier = supplier;
		
		
	}
	
	public Integer getNumOrder() {
		return numOrder;
	}

	public void setNumOrder(int numOrder) {
		this.numOrder = numOrder;
	}

	public float getTotal() {
		return total;
	}

	public void setTotal(float total) {
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
	
	
	

}
