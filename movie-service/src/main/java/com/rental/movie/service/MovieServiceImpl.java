package com.rental.movie.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rental.movie.domain.Movie;
import com.rental.movie.domain.MovieState;
import com.rental.movie.repository.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService {

	private final Logger log = LoggerFactory.getLogger(getClass());

	@Autowired
	private MovieRepository repository;
	
	@Override
	public Movie addMovie(Movie movie) {
				
		Movie currentMovie = repository.findOne(movie.getName());
		
		if(currentMovie == null){
			Movie newMovie = new Movie();
			newMovie.setName(movie.getName());
			newMovie.setDesc(movie.getDesc());
			newMovie.setNoOfCopies(movie.getNoOfCopies());
			newMovie.setPrice(movie.getPrice());
			newMovie.setMovieState(movie.getMovieState());
			return repository.save(newMovie);
		}
		
		log.debug("The movie " + currentMovie.getName() + " is already in our database" );
		return null;
	}

	@Override
	public String removeMovie(String name) {
		Movie currentMovie = repository.findOne(name);
		
		if(currentMovie == null){
			log.error(name + " movie does not exist");
			return null;
		}
		
		repository.delete(currentMovie);
		return "movie deleted";
	}

	@Override
	public Movie updateMovie(Movie movie) {
		
		Movie currentMovie = repository.findOne(movie.getName());
		
		if(currentMovie == null){
			log.error("The movie " + movie.getName() + " does not exist" );
			return null;
		}
		
		if(movie.getDesc() != null){
			currentMovie.setDesc(movie.getDesc());
			log.info("Description updated");
		}
		
		if(movie.getMovieState() != null){
			currentMovie.setMovieState(movie.getMovieState());
			log.info("Movie state updated");
		}
		
		if(movie.getNoOfCopies() != null){
			currentMovie.setNoOfCopies(movie.getNoOfCopies());
			log.info("Number of copies updated");
		}
		
		if(movie.getPrice() != null){
			currentMovie.setPrice(movie.getPrice());
		}
		
		currentMovie.setName(movie.getName());
		
		return repository.save(currentMovie);
	}

	@Override
	public Movie getMovieStatus(String name) {
		Movie currentMovie = repository.findOne(name);
		
		if(currentMovie == null){
			log.error("The movie does not exist");
			return null;
		}
		return currentMovie;
	}

	@Override
	public Iterable<Movie> getAllMovies() {
		return repository.findAll();
	}

	@Override
	public Iterable<Movie> getAllAvailableMovies() {
		return repository.findByMovieStateLike(MovieState.AVAILABLE);
	}
}
