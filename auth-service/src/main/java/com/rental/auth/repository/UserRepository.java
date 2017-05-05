package com.rental.auth.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.auth.domain.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
