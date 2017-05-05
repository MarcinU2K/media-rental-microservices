package com.rental.movie.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.movie.domain.Movie;
import com.rental.movie.domain.MovieState;

@Repository
public interface MovieRepository extends CrudRepository<Movie, String>{

	Iterable<Movie> findByMovieStateLike(MovieState available);

}