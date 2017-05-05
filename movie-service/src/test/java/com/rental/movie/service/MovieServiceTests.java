package com.rental.movie.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import com.rental.movie.MovieServiceApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MovieServiceApplication.class)
@WebAppConfiguration
public class MovieServiceTests {

	@Test
	public void contextLoads() {
	}
	
}
