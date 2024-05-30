package com.Jabai.WebShop.controllers;

import com.Jabai.WebShop.domain.Comix;
import com.Jabai.WebShop.service.ComixService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/comix")
public class ComixController {

    private final ComixService comixService;

    @Autowired
    public ComixController(ComixService comixService) {
        this.comixService = comixService;
    }

    @GetMapping
    public List<Comix> getAllComix() {
        return comixService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Comix> getComixById(@PathVariable String id) {
        Optional<Comix> comix = comixService.findById(id);
        return comix.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<String> createComix(@RequestBody Comix comix) {
        Comix createdComix = comixService.save(comix);
        String message = String.format("Комикс с id %s был создан.", createdComix.getId());
        return ResponseEntity.ok(message);
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> updateComix(@PathVariable String id, @RequestBody Comix comixDetails) {
        Optional<Comix> comixOptional = comixService.findById(id);
        if (comixOptional.isPresent()) {
            Comix comix = comixOptional.get();
            comix.setTitle(comixDetails.getTitle());
            comix.setDescription(comixDetails.getDescription());
            comix.setGenre(comixDetails.getGenre());
            comix.setYear(comixDetails.getYear());
            comix.setPublisher(comixDetails.getPublisher());
            comix.setStatus(comixDetails.getStatus());
            comix.setCoverImage(comixDetails.getCoverImage());
            comix.setTags(comixDetails.getTags());
            comix.setInTop(comixDetails.isInTop());
            comix.setImages(comixDetails.getImages());
            comix.setTranslations(comixDetails.getTranslations());
            comix.setSimilarComix(comixDetails.getSimilarComix());
            Comix updatedComix = comixService.save(comix);
            String message = String.format("Комикс с id %s был обновлен.", id);
            return ResponseEntity.ok(message);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComix(@PathVariable String id) {
        Optional<Comix> comixOptional = comixService.findById(id);
        if (comixOptional.isPresent()) {
            comixService.deleteById(id);
            return ResponseEntity.ok("Комикс с id - " + id + " был удален");
        } else {
            return ResponseEntity.notFound().build();
        }
    }




}