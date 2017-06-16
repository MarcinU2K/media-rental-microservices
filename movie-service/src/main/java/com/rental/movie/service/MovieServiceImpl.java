package com.rental.movie.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rental.movie.domain.Movie;
import com.rental.movie.repository.MovieRepository;

/**
 * movie-service code
 * @author Marcin Pisera
 */

@Service
public class MovieServiceImpl implements MovieService {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private MovieRepository movieRepository;
	
	@Override
	public Movie addMovie(Movie movie) {
				
		Movie currentMovie = movieRepository.findByName(movie.getName());
		
		if(currentMovie == null){
			Movie newMovie = new Movie();
			newMovie.setName(movie.getName());
			newMovie.setDesc(movie.getDesc());
			newMovie.setNoOfCopies(movie.getNoOfCopies());
			newMovie.setPrice(movie.getPrice());
			newMovie.setRentCount(movie.getRentCount());
			newMovie.setImageUri(movie.getImageUri());
			return movieRepository.save(newMovie);
		}
		
		log.debug("The movie " + currentMovie.getName() + " is already in our database" );
		return null;
	}

	@Override
	public String removeMovie(String id) {
		Movie currentMovie = movieRepository.findOne(id);
		
		if(currentMovie == null){
			log.error("movie " + id + " does not exist");
			return null;
		}
		
		movieRepository.delete(currentMovie);
		return "movie deleted";
	}

	@Override
	public Movie updateMovie(Movie movie) {
		
		Movie currentMovie = movieRepository.findOne(movie.getId());
		
		if(currentMovie == null){
			log.error("The movie " + movie.getName() + " does not exist" );
			return null;
		}
		
		if(movie.getDesc() != null){
			currentMovie.setDesc(movie.getDesc());
			log.info("Description updated");
		}
		
		if(movie.getNoOfCopies() != null){
			currentMovie.setNoOfCopies(movie.getNoOfCopies());
			log.info("Number of copies updated");
		}
		
		if(movie.getPrice() != null){
			currentMovie.setPrice(movie.getPrice());
		}
		
		if(movie.getRentCount() != 0){
			currentMovie.setRentCount(movie.getRentCount());
		}
		
		if(movie.getImageUri() != null){
			currentMovie.setImageUri(movie.getImageUri());
		}
		
		currentMovie.setName(movie.getName());
		
		return movieRepository.save(currentMovie);
	}

	@Override
	public Movie getMovieStatus(String name) {
		Movie currentMovie = movieRepository.findOne(name);
		
		if(currentMovie == null){
			log.error("The movie does not exist");
			return null;
		}
		return currentMovie;
	}

	@Override
	public Iterable<Movie> getAllMovies() {
		return movieRepository.findAll();
	}

	@Override
	public Movie getMovieByName(String name) {
		Movie existingMovie = movieRepository.findByName(name);
		
		if(existingMovie == null){
			log.error("This movie does not exist");
			return null;
		}
		return existingMovie;
	}
}