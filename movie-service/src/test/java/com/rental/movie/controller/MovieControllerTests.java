package com.rental.movie.controller;

import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
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
import com.google.common.collect.ImmutableList;
import com.rental.movie.MovieServiceApplication;
import com.rental.movie.domain.Movie;
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
		Movie initialMovie = createMovie("movie1234");
		
		Movie movie = new Movie();
		movie.setDesc(initialMovie.getDesc());
		movie.setMovieAvailable(initialMovie.isMovieAvailable());
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
	
	@Test
	public void shouldRemoveMovie() throws Exception {
		String name = "name";
		String movie = "movie";
		
		when(movieService.removeMovie(name)).thenReturn(movie);
		
		String url = "/movie/" + name;
		
		mockMvc.perform(delete(url)).
		andExpect(status().isOk());
	}
	
	@Test
	public void shouldNotRemoveMovieIfNameNull() throws Exception {
		String name = null;
		
		when(movieService.removeMovie(name)).thenReturn(null);
		
		String url = "/movie/" + name;
		
		mockMvc.perform(delete(url)).
		andExpect(status().isBadRequest());
	}

	@Test
	public void shouldUpdateMovie() throws Exception {
		Movie movie = createMovie("movie1234");
		
		String movieJson = mapper.writeValueAsString(movie);
		
		when(movieService.updateMovie(any(Movie.class))).thenReturn(movie);
		
		String url = "/movie";
		
		mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(movieJson)).
		andExpect(status().isOk());
	}
	
	@Test
	public void shouldNotUpdateMovieIfNull() throws Exception {
		Movie movie = createMovie("movie1234");
		
		String movieJson = mapper.writeValueAsString(movie);
		
		when(movieService.updateMovie(any(Movie.class))).thenReturn(null);
		
		String url = "/movie";
		
		mockMvc.perform(put(url).contentType(MediaType.APPLICATION_JSON).content(movieJson)).
		andExpect(status().isBadRequest());
	}
	
	@Test
	public void shouldGetMovieStatus() throws Exception {
		Movie movie = createMovie("movie1234");
		String name = "movie1234";
		
		when(movieService.getMovieStatus(name)).thenReturn(movie);
		
		String url = "/movie/status/" + name;
		
		mockMvc.perform(get(url)).
		andExpect(status().isOk());
		
	}
	
	@Test
	public void shouldGetAllMovies() throws Exception{
		Movie movie = createMovie("movie1234");
		
		when(movieService.getAllMovies()).thenReturn(ImmutableList.of(movie));
		
		String url = "/movie/all";
		
		mockMvc.perform(get(url)).
		andExpect(status().isOk());
	}
	
	@Test
	public void shouldGetAllAvailableMovies() throws Exception{
		Movie movie = createMovie("movie1234");
		
		when(movieService.getAllMovies()).thenReturn(ImmutableList.of(movie));
		
		String url = "/movie/available";
		
		mockMvc.perform(get(url)).
		andExpect(status().isOk());
	}
	
	private Movie createMovie(String name) {
		Movie movie = new Movie();
		movie.setName(name);
		movie.setDesc("description");
		movie.setMovieAvailable(true);
		movie.setNoOfCopies("22");
		movie.setPrice("£12");
		return movie;
	}
}
