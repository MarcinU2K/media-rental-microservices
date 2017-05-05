package com.rental.movie.controller;

import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rental.movie.MovieServiceApplication;
import com.rental.movie.domain.Movie;
import com.rental.movie.domain.MovieState;
import com.rental.movie.service.MovieService;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MovieServiceApplication.class)
@WebAppConfiguration
public class MovieControllerTests {

	private static final ObjectMapper mapper = new ObjectMapper();
	private final Logger log = LoggerFactory.getLogger(getClass());

	
	@InjectMocks
	private MovieController movieController;
	
	@Mock
	private MovieService movieService;
	
	private MockMvc mockMvc;
	
	@Before
	public void setup() {
		initMocks(this);
		this.mockMvc = MockMvcBuilders.standaloneSetup(movieController).build();
	}
	
	@Test
	public void shouldAddMovie() throws Exception {
		Movie initialMovie = createMovie();
		
		Movie movie = new Movie();
		movie.setDesc(initialMovie.getDesc());
		movie.setMovieState(initialMovie.getMovieState());
		movie.setName(initialMovie.getName());
		movie.setNoOfCopies(initialMovie.getNoOfCopies());
		movie.setPrice(initialMovie.getPrice());
			
		String movieJson = mapper.writeValueAsString(initialMovie);
		
		when(movieService.addMovie(initialMovie)).thenReturn(movie);
		
		String url = "/movie";
		
		mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON).content(movieJson)).
		andExpect(status().isOk());
	}
	
	@Test
	public void shouldFailToAddMovieIfBodyNull() throws Exception {
		
		String url = "/movie";
		
		mockMvc.perform(post(url).contentType(MediaType.APPLICATION_JSON)).
		andExpect(status().isBadRequest());
	}

	private Movie createMovie() {
		Movie movie = new Movie();
		movie.setName("movie1234");
		movie.setDesc("description");
		movie.setMovieState(MovieState.AVAILABLE);
		movie.setNoOfCopies("22");
		movie.setPrice("£12");
		return movie;
	}
}
