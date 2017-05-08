package com.rental.rent.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rental.rent.domain.Rent;
import com.rental.rent.service.RentService;

/**
 * rent-service code
 * @author Marcin Pisera
 */

@RestController
public class RentController {
	
	@Autowired
	private RentService rentService;
	
	/**
	 * Method adding new rent
	 */
	
	@RequestMapping(value = "/rent", method = RequestMethod.POST)
	public Rent addRent(@RequestBody Rent rent) {
		return rentService.addRent(rent);	
	}

	/**
	 * Method viewing rents by userId
	 */
	
	@RequestMapping(value = "/rent/{userId}", method = RequestMethod.GET)
	public List<Rent> getRentByUserId(@PathVariable("userId") String userId){
		return rentService.getRentByUserId(userId);
	}
}
