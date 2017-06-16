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
 * movie-service code
 * @author Marcin Pisera
 */

@RestController
public class MovieController {

	@Autowired
	private MovieService movieService;
	
	/**
	 * Method adding new movie
	 */
	
	@RequestMapping(value = "/movie", method = RequestMethod.POST)
	public Movie addMovie(@RequestBody Movie movie){
		return movieService.addMovie(movie);
	}
	
	/**
	 * Method removing movie
	 */
	
	@RequestMapping(value = "/movie/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> removeMovie(@PathVariable("id") String id){
		String movie = movieService.removeMovie(id);
		if(movie == null || id == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		return ResponseEntity.ok("movie " + id + " deleted");
		
	}
	
	/**
	 * Method updating movie
	 */
	
	@RequestMapping(value = "/movie", method = RequestMethod.PUT)
	public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie){
		Movie movieUpdated = movieService.updateMovie(movie);
		if(movieUpdated == null){
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		return ResponseEntity.ok(movieUpdated);
	}
	
	/**
	 * Method checking movie status
	 */
	
	@RequestMapping(value = "/movie/status/{name}", method = RequestMethod.GET)
	public Movie getMovieStatus(@PathVariable("name") String name){
		return movieService.getMovieStatus(name);
	}
	
	/**
	 * Method viewing all movies
	 */
	
	@RequestMapping(value = "/movie/all", method = RequestMethod.GET)
	public Iterable<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	/**
	 * Method getting movie by name
	 */
	
	@RequestMapping(path = "/movie/{name}", method = RequestMethod.GET)
	public Movie getMovieByName(@PathVariable("name") String name){
		return movieService.getMovieByName(name);
	}
}
