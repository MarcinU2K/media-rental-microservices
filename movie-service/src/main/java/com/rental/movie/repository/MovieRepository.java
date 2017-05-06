package com.rental.movie.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.movie.domain.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, String>{

//	@Query(value = "{ movieAvailable: true }")
//	Iterable<Movie> findAvailableMovies();

	Iterable<Movie> findByMovieAvailableTrue();

}