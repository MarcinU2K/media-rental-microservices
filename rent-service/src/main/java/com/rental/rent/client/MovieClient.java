package com.rental.rent.client;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.rental.rent.domain.Movie;

@FeignClient(name = "movie-service")
public interface MovieClient {

	@RequestMapping(value = "/movies/movie/{name}", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	Movie getMovieByName(@PathVariable("name") String name);
}
