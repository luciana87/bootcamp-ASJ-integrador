package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.PurchaseOrderRequestDTO;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.PurchaseOrderRepository;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class PurchaseOrderService {
	
	private PurchaseOrderRepository purchaseOrderRepository;
	
	public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository) {
		this.purchaseOrderRepository = purchaseOrderRepository;
	}

	public List<PurchaseOrder> retrieveAll() {
		return purchaseOrderRepository.findAll();
	}

	public PurchaseOrder retriveById(Integer id) {
		Optional<PurchaseOrder> orderOptional = purchaseOrderRepository.findById(id);
		
		if (orderOptional.isPresent()) {
			throw new ResourceNotFoundException("Órden de compra no encontrada.");
		}
		return orderOptional.get();
	}

	@Transactional
	public PurchaseOrder create(@Valid PurchaseOrderRequestDTO orderDTO) {
		
		return null;
	}

}
