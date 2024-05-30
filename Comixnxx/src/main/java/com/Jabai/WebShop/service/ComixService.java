package com.Jabai.WebShop.service;

import com.Jabai.WebShop.domain.Comix;
import com.Jabai.WebShop.repository.ComixRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComixService {

    private final ComixRepository comixRepository;

    @Autowired
    public ComixService(ComixRepository comixRepository) {
        this.comixRepository = comixRepository;
    }

    public List<Comix> findAll() {
        return comixRepository.findAll();
    }

    public Optional<Comix> findById(String id) {
        return comixRepository.findById(id);
    }

    public Comix save(Comix comix) {
        return comixRepository.save(comix);
    }

    public void deleteById(String id) {
        comixRepository.deleteById(id);
    }
}
