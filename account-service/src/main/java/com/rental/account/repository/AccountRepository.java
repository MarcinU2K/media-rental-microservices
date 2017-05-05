package com.rental.account.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rental.account.domain.Account;

@Repository
public interface AccountRepository extends CrudRepository<Account, String> {

	Account findByName(String name);

}
