package com.bootcamp.gestorApp.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.entities.ItemDetail;
import com.bootcamp.gestorApp.entities.Product;
import com.bootcamp.gestorApp.entities.PurchaseOrder;
import com.bootcamp.gestorApp.entities.Supplier;
import com.bootcamp.gestorApp.repositories.ItemDetailRepository;


@Service
public class ItemDetailService {
	
	private ItemDetailRepository itemDetailRepository;
	private ProductService productService;

	
	
	public ItemDetailService(ItemDetailRepository itemDetailRepository, ProductService productService) {
		this.itemDetailRepository = itemDetailRepository;
		this.productService = productService;
	}

	public List<ItemDetail> create(List<ItemDetail> items, PurchaseOrder order) {
		List<ItemDetail> itemList = new ArrayList<ItemDetail>();
		ItemDetail item = null;
		for (ItemDetail itemDetail : items) {
			Product product = productService.retriveById(itemDetail.getProduct().getId());
			double total = product.getPrice() * itemDetail.getAmount();
			item = new ItemDetail(product.getPrice(), itemDetail.getAmount(), total, product, order);
			itemList.add(itemDetailRepository.save(item));
		}
		
		return itemList;
	}
	
	public List<ItemDetailResponseDTO> mapToDTOS(List<ItemDetail> items) {
	    return items.stream()
	                .map(item -> mapToDTO(item))
	                .collect(Collectors.toList());
	}

	private ItemDetailResponseDTO mapToDTO(ItemDetail item) {
		return new ItemDetailResponseDTO(item.getId(), item.getAmount(), item.getTotal(), item.getProduct());
		
	}

	public List<ItemDetail> findBySupplierId(Integer id) {
		return null;
	}


	
	

}
