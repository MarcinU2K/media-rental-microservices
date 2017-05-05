package com.rental.movie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rental.movie.domain.Movie;
import com.rental.movie.service.MovieService;

/**
 * movie-service controller code
 * @author Marcin Pisera
 */

@RestController
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	/**
	 * Method adding new movie
	 */
	
	@RequestMapping(path = "/movie", method = RequestMethod.POST)
	public Movie addMovie(@RequestBody Movie movie){
		return movieService.addMovie(movie);
	}
	
	/**
	 * Method removing movie
	 */
	
	@RequestMapping(path = "/movie/{name}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeMovie(@PathVariable("name") String name){
		String movie = movieService.removeMovie(name);
		if(movie == null || name == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		return ResponseEntity.ok("movie " + name + " deleted");
		
	}
	
	/**
	 * Method updating movie
	 */
	
	@RequestMapping(path = "/movie", method = RequestMethod.PUT)
	public ResponseEntity<Movie> updateMovie(@PathVariable("name") String name, @RequestBody Movie movie){
		Movie movieUpdated = movieService.updateMovie(movie);
		if(movieUpdated == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		return ResponseEntity.ok(movieUpdated);
	}
	
	/**
	 * Method checking movie status
	 */
	
	@RequestMapping(path = "/movie/{name}", method = RequestMethod.GET)
	public Movie getMovieStatus(@PathVariable("name") String name){
		return movieService.getMovieStatus(name);
	}
	
	/**
	 * Method viewing all movies
	 */
	
	@RequestMapping(path = "/movie/all", method = RequestMethod.GET)
	public Iterable<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	/**
	 * Method viewing all available movies
	 */
	
	@RequestMapping(path = "/movie/all", method = RequestMethod.GET)
	public Iterable<Movie> getAllAvailableMovies(){
		return movieService.getAllAvailableMovies();
	}
}
