package com.bootcamp.gestorApp.services;

import java.util.List;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.bootcamp.gestorApp.DTO.response.ItemDetailResponseDTO;
import com.bootcamp.gestorApp.entities.ItemDetail;
import com.bootcamp.gestorApp.repositories.ItemDetailRepository;


@Service
public class ItemDetailService {
	
	private ItemDetailRepository itemDetailRepository;

	public ItemDetailService(ItemDetailRepository itemDetailRepository) {
		this.itemDetailRepository = itemDetailRepository;
	}
	
	public List<ItemDetailResponseDTO> mapToDTOS(List<ItemDetail> items) {
	    return items.stream()
	                .map(item -> mapToDTO(item))
	                .collect(Collectors.toList());
	}

	private ItemDetailResponseDTO mapToDTO(ItemDetail item) {
		return new ItemDetailResponseDTO(item.getId(), item.getPrice(), item.getAmount(), item.getTotal(), 
										item.getProduct().getName(), item.getProduct().getImage(), item.getProduct().getPrice());
		
		//return Util.getModelMapper().map(item, ItemDetailResponseDTO.class);
	}
	
	

}
