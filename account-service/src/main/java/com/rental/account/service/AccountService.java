package com.rental.account.service;

import com.rental.account.domain.Account;
import com.rental.account.domain.User;

public interface AccountService {

	Account findByName(String accountName);

	Account create(User user);

	void saveChanges(String name, Account update);
}
