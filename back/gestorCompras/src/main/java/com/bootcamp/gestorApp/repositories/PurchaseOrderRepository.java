package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bootcamp.gestorApp.entities.PurchaseOrder;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer>{

	boolean existsByNumOrder(int numOrder);

	@Query("SELECT COUNT(po) FROM PurchaseOrder po WHERE po.canceled = false") //En la query hace referencia al nombre de la clase no al nombre de la tabla en la db
	Integer getAmountOrders();

	@Query("SELECT COUNT(po) > 0 FROM PurchaseOrder po WHERE po.supplier.id = :id")
	boolean findActiveOrderBySupplier(Integer id);

	
}
