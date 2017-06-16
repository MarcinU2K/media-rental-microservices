package com.rental.movie.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.movie.domain.Movie;

@Repository
public interface MovieRepository extends CrudRepository<Movie, String>{

	Movie findByName(String name);

}