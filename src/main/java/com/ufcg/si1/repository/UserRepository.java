package com.ufcg.si1.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ufcg.si1.model.User;
import java.lang.String;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
	
	User findOneByEmail(String email);

}
