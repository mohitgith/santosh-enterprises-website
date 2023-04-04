package com.business.santoshenterprises.repository;

import org.springframework.data.repository.CrudRepository;

import com.business.santoshenterprises.model.Product;

public interface ProductRepository extends CrudRepository<Product, String>{
    
    Product findByProductNo(String productNo);

    boolean existsProductByProductNo(String productNo);

}
