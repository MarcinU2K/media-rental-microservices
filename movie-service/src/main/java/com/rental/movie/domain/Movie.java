package com.rental.movie.domain;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.hibernate.validator.constraints.Length;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
@JsonIgnoreProperties(ignoreUnknown = true)
public class Movie {

	@Id
	private String id;

	private String name;
	
	private String price;
	
	@Length(max = 1_000)
	private String desc;
	
	private int rentCount;
	
	private String imageUri;
	
	private String noOfCopies;
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

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

	public int getRentCount() {
		return rentCount;
	}

	public void setRentCount(int rentCount) {
		this.rentCount = rentCount;
	}

	public String getImageUri() {
		return imageUri;
	}

	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}
}
