package com.bootcamp.gestorApp.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.gestorApp.DTO.request.PurchaseOrderRequestDTO;
import com.bootcamp.gestorApp.DTO.response.PurchaseOrderResponseDTO;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
import com.bootcamp.gestorApp.services.PurchaseOrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping(path = "/purchase-orders")
@CrossOrigin(origins = "http://localhost:4200")
public class PurchaseOrderController {
	
	private PurchaseOrderService purchaseOrderService;
	
	public PurchaseOrderController(PurchaseOrderService purhcOrderService) {
		this.purchaseOrderService = purhcOrderService;
	}
	
	
	@GetMapping
	public ResponseEntity<List<PurchaseOrderResponseDTO>> retrieve() {
	    return new ResponseEntity<>(purchaseOrderService.retrieveAll(), HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<PurchaseOrderResponseDTO> retriveById(@PathVariable Integer id) {
		return new ResponseEntity<PurchaseOrderResponseDTO>(purchaseOrderService.getById(id), HttpStatus.OK);
	}
	
	 @PostMapping
	 public ResponseEntity<PurchaseOrder> create(@Valid @RequestBody PurchaseOrderRequestDTO orderDTO) { 
		 return new	ResponseEntity<PurchaseOrder>(purchaseOrderService.create(orderDTO),HttpStatus.CREATED); 
	 }

}
