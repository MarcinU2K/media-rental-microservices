package com.rental.rent.service;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.rental.rent.client.MovieClient;
import com.rental.rent.domain.Movie;
import com.rental.rent.domain.Rent;
import com.rental.rent.repository.RentRepository;

/**
 * rent-service code
 * @author Marcin Pisera
 */

@Service
public class RentServiceImpl implements RentService {

	private final Logger log = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private RentRepository rentRepository;
	
	@Autowired
	private MovieClient movieClient;
	
	@Override
	public Rent addRent(Rent rent) {
		Movie existingMovie = movieClient.getMovieByName(rent.getMovieName());
		if(existingMovie == null){
			log.error("This movie does not exist");
			return null;
		}
		
		if(rent.getMovieId() == null || rent.getUserId() == null || rent.getMovieName() == null){
			log.error("The request is missing required data");
		}
		
		Rent newRent = new Rent();
		newRent.setMovieId(rent.getMovieId());
		newRent.setUserId(SecurityContextHolder.getContext().getAuthentication().getName());
		newRent.setMovieName(rent.getMovieName());
		newRent.setOrdered(false);
		newRent.setDate(new Date());
		return rentRepository.save(newRent);
	}

	@Override
	public void deleteRent(String id) {
		rentRepository.delete(id);
	}

	@Override
	public List<Rent> getRentByUserIdOrderFalse(String userId) {
		return rentRepository.findByOrderedFalseAndUserId(userId);
	}

	@Override
	public List<Rent> getRentByUserIdOrderTrue(String userId) {
		return rentRepository.findByOrderedTrueAndUserId(userId);
	}

	@Override
	public void completeOrder(String userId) {
		List<Rent> moviesToBeOrdered = rentRepository.findByOrderedFalseAndUserId(userId);
		for (Rent movie : moviesToBeOrdered) {
			movie.setOrdered(true);
			rentRepository.save(movie);
		}
	}
}