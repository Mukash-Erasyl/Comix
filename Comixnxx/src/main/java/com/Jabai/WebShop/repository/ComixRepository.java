package com.Jabai.WebShop.repository;

import com.Jabai.WebShop.domain.Comix;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComixRepository extends MongoRepository<Comix, String> {
}