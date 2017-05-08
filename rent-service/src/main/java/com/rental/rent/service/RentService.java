package com.rental.rent.service;

import java.util.List;

import com.rental.rent.domain.Rent;

public interface RentService {

	Rent addRent(Rent rent);

	List<Rent> getRentByUserId(String userId);

}
