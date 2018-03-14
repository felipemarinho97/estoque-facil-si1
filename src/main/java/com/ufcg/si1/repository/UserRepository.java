package com.ufcg.si1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ufcg.si1.model.User;
import java.lang.String;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findOneByEmail(String email);

}
