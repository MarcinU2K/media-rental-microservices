package com.rental.account.repository;

import static org.junit.Assert.assertEquals;

import java.util.Date;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.rental.account.AccountApplication;
import com.rental.account.domain.Account;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = AccountApplication.class)
public class AccountRepositoryTest {

	@Autowired
	private AccountRepository repository;

	@Test
	public void shouldFindAccountByName() {

		Account stub = getStubAccount();
		repository.save(stub);

		Account found = repository.findByName(stub.getName());
		assertEquals(stub.getLastSeen(), found.getLastSeen());
		assertEquals(stub.getNote(), found.getNote());
	}

	private Account getStubAccount() {

		Account account = new Account();
		account.setName("test");
		account.setNote("test note");
		account.setLastSeen(new Date());

		return account;
	}
}
