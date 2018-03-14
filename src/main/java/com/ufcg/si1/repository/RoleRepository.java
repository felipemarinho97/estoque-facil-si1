package com.ufcg.si1.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ufcg.si1.model.Role;
@Repository
public interface RoleRepository extends CrudRepository<Role, Integer> {}
