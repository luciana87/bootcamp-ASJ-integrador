package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.ItemDetail;

public interface ItemDetailRepository extends JpaRepository<ItemDetail, Integer>{

}
