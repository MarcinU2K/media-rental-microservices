package com.rental.movie.domain;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Movie {

	@Id
	private String name;
	
	private String price;
	
	@Length(max = 1_000)
	private String desc;
	
	private String noOfCopies;
	
	private MovieState movieState;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getNoOfCopies() {
		return noOfCopies;
	}

	public void setNoOfCopies(String noOfCopies) {
		this.noOfCopies = noOfCopies;
	}

	public MovieState getMovieState() {
		return movieState;
	}

	public void setMovieState(MovieState movieState) {
		this.movieState = movieState;
	}
}
