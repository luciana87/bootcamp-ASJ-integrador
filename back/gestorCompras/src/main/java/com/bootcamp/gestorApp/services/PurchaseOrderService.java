package com.bootcamp.gestorApp.services;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.bootcamp.gestorApp.DTO.request.PurchaseOrderRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.DTO.response.PurchaseOrderResponseDTO;
import com.bootcamp.gestorApp.entities.ItemDetail;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.exceptions.ExistingResourceException;
import com.bootcamp.gestorApp.exceptions.ResourceNotFoundException;
import com.bootcamp.gestorApp.repositories.PurchaseOrderRepository;
import com.bootcamp.gestorApp.utils.Util;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

@Service
public class PurchaseOrderService {
	
	private PurchaseOrderRepository purchaseOrderRepository;
	private ItemDetailService itemDetailService;
	private SupplierService supplierService;

	public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository, ItemDetailService itemDetailService,
			@Lazy SupplierService supplierService) {

		this.purchaseOrderRepository = purchaseOrderRepository;
		this.itemDetailService = itemDetailService;
		this.supplierService = supplierService;
	}


	public List<PurchaseOrderResponseDTO> retrieveAll() {
		List<PurchaseOrder> orders = purchaseOrderRepository.findAll();
		return mapToDTOS(orders);
	}

	public PurchaseOrderResponseDTO getById(Integer id) {
		return mapToDTO(this.getEntityById(id));
	}

	public PurchaseOrder getEntityById(Integer id) {
		Optional<PurchaseOrder> orderOptional = purchaseOrderRepository.findById(id);
		if (orderOptional.isEmpty()) {
			throw new ResourceNotFoundException("Órden de compra no encontrada.");
		}
		return orderOptional.get();
	}

	@Transactional
	public PurchaseOrderResponseDTO create(@Valid PurchaseOrderRequestDTO orderDTO) {
		
		checkForExistingOrder(orderDTO.getNumOrder());
		
		Supplier supplier = supplierService.retriveById(orderDTO.getSupplierId());
		
		PurchaseOrder order = mapToEntity(orderDTO, supplier);

		order = purchaseOrderRepository.save(order);
		
		if (!CollectionUtils.isEmpty(orderDTO.getItems())) {
			List<ItemDetail> items = itemDetailService.create(orderDTO.getItems(), order);
			order.setTotal(calculateTotal(items));
			order.setItems(items);
			order = purchaseOrderRepository.save(order);			
		}
		return mapToDTO(order);
	}
	
	private double calculateTotal(List<ItemDetail> items) {
		
		return Math.round(items.stream().mapToDouble(item -> item.getTotal()).sum() * 100.0) / 100.0;
		
	}

	public List<PurchaseOrderResponseDTO> mapToDTOS(List<PurchaseOrder> orders) {
		return orders.stream()
                .map(order -> mapToDTO(order))
                .collect(Collectors.toList());
	}
	
	public void delete(Integer id) {

		PurchaseOrder order = this.getEntityById(id);
		order.setCanceled(true);
		purchaseOrderRepository.save(order);
	
	}

	private PurchaseOrderResponseDTO mapToDTO(PurchaseOrder purchaseOrder) {
		PurchaseOrderResponseDTO orderResponseDTO = Util.getModelMapper().map(purchaseOrder, PurchaseOrderResponseDTO.class);
		List<ItemDetailResponseDTO> itemsDTOS = itemDetailService.mapToDTOS(purchaseOrder.getItems());
		orderResponseDTO.setItemsDTO(itemsDTOS);
		return orderResponseDTO;
	}
	
	private PurchaseOrder mapToEntity(PurchaseOrderRequestDTO orderDTO, Supplier supplier) {
		
    	PurchaseOrder order = Util.getModelMapper().map(orderDTO, PurchaseOrder.class);
    	LocalDateTime created = LocalDateTime.parse(orderDTO.getCreatedAt(),Util.getDateTimeFormatter());
    	order.setCreatedAt(created);
    	
    	LocalDateTime deadline = LocalDateTime.parse(orderDTO.getDeadline(),Util.getDateTimeFormatter());
    	order.setDeadline(deadline);
    	
    	order.setSupplier(supplier);
		order.setItems(new ArrayList<ItemDetail>());

	    return order;
    }
	
	private void checkForExistingOrder(int numOrder) {
        if (purchaseOrderRepository.existsByNumOrder(numOrder)) {
            throw new ExistingResourceException("Ya existe una órden de compra con el número de órden #" + numOrder);
        }
	}

	public Integer calculateAmountOrders() {
		Integer amount = purchaseOrderRepository.getAmountOrders();
		return amount;
	}

	public boolean findActiveOrderBySupplier(Integer id) {
		return purchaseOrderRepository.findActiveOrderBySupplier(id);
		
	}

}
