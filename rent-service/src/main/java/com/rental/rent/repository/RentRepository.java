package com.rental.rent.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.rent.domain.Rent;

@Repository
public interface RentRepository extends CrudRepository<Rent, String>{

	List<Rent> findByUserId(String userId);

}