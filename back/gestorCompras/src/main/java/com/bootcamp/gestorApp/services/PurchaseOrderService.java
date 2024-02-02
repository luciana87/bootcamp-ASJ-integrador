package com.bootcamp.gestorApp.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.request.PurchaseOrderRequestDTO;
import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.DTO.response.PurchaseOrderResponseDTO;
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
	private ProductService productService;

	public PurchaseOrderService(PurchaseOrderRepository purchaseOrderRepository, ItemDetailService itemDetailService,
			SupplierService supplierService, ProductService productService) {

		this.purchaseOrderRepository = purchaseOrderRepository;
		this.itemDetailService = itemDetailService;
		this.supplierService = supplierService;
		this.productService = productService;
	}


	public List<PurchaseOrderResponseDTO> retrieveAll() {
		List<PurchaseOrder> orders = purchaseOrderRepository.findAll();
		return mapToDTOS(orders);
	}

	public PurchaseOrderResponseDTO getById(Integer id) {
		Optional<PurchaseOrder> orderOptional = purchaseOrderRepository.findById(id);
		if (orderOptional.isEmpty()) {
			throw new ResourceNotFoundException("Órden de compra no encontrada.");
		}
		return mapToDTO(orderOptional.get());
	}

	@Transactional
	public PurchaseOrder create(@Valid PurchaseOrderRequestDTO orderDTO) {
		
		checkForExistingOrder(orderDTO.getNumOrder());
		
		Supplier supplier = supplierService.retriveById(orderDTO.getSupplierId());
		//Product[] productList = productService.retrieveAll();
		
		return null;
	}
	

	public List<PurchaseOrderResponseDTO> mapToDTOS(List<PurchaseOrder> orders) {
		return orders.stream()
                .map(order -> mapToDTO(order))
                .collect(Collectors.toList());
	}
	


	private PurchaseOrderResponseDTO mapToDTO(PurchaseOrder purchaseOrder) {
		PurchaseOrderResponseDTO orderResponseDTO = Util.getModelMapper().map(purchaseOrder, PurchaseOrderResponseDTO.class);
		List<ItemDetailResponseDTO> itemsDTOS = itemDetailService.mapToDTOS(purchaseOrder.getItems());
		orderResponseDTO.setItemsDTO(itemsDTOS);
		return orderResponseDTO;
	}
	
	private PurchaseOrder mapToEntity(PurchaseOrderRequestDTO orderDTO, Supplier supplier) {
    	PurchaseOrder order = Util.getModelMapper().map(orderDTO, PurchaseOrder.class);
    	order.setSupplier(supplier);

	    return order;
    }
	
	private void checkForExistingOrder(int numOrder) {
        if (purchaseOrderRepository.existsByNumOrder(numOrder)) {
            throw new ExistingResourceException();
        }
	}




}
