package com.bootcamp.gestorApp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bootcamp.gestorApp.entities.IvaType;

public interface IvaRepository extends JpaRepository<IvaType, Integer>{

}
