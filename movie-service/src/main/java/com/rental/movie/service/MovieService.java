package com.rental.movie.service;

import com.rental.movie.domain.Movie;

public interface MovieService {

	Movie addMovie(Movie movie);

	String removeMovie(String id);

	Movie updateMovie(Movie movie);

	Movie getMovieStatus(String name);

	Iterable<Movie> getAllMovies();

	Movie getMovieByName(String name);
	
}