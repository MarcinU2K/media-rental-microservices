package com.rental.movie.service;

import com.rental.movie.domain.Movie;

public interface MovieService {

	Movie addMovie(Movie movie);

	String removeMovie(String name);

	Movie updateMovie(Movie movie);

	Movie getMovieStatus(String name);

	Iterable<Movie> getAllMovies();

	Iterable<Movie> getAllAvailableMovies();

	Movie getMovieByName(String name);
	
}