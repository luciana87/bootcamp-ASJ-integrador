package entity;

import java.time.LocalDateTime;

import org.hibernate.engine.transaction.jta.platform.internal.BitronixJtaPlatform;
import org.springframework.security.access.event.PublicInvocationEvent;

public class PurchaseOrder {
	private int id;
	private int numOrder;
	private LocalDateTime createdAt;
	private float total;
	private boolean canceled;
	private String description;
	private Supplier supplier;
	
	public PurchaseOrder () {}

	public PurchaseOrder(int numOrder, float total, String description, Supplier supplier) {

		this.numOrder = numOrder;
		this.createdAt = LocalDateTime.now();
		this.total = total;
		this.canceled = false;
		this.description = description;
		this.supplier = supplier;
		
		
	}
	
	public int getNumOrder() {
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
