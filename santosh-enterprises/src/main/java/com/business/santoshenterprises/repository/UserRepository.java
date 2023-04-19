package com.business.santoshenterprises.repository;

import org.springframework.data.repository.CrudRepository;

import com.business.santoshenterprises.model.User;

public interface UserRepository extends CrudRepository<User, Long> {

    boolean existsUserByUsername(String username);
}
