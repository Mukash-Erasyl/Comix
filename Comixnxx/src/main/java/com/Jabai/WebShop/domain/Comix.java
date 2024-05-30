package com.Jabai.WebShop.domain;

import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.*;
import java.util.List;

@Document(collection = "comix")
public class Comix {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String _id;

    private String title;
    private String description;
    @ElementCollection
    private List<String> genre;
    private int year;
    private String publisher;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String coverImage;
    @ElementCollection
    private List<String> tags;
    private boolean inTop;
    @ElementCollection
    private List<String> images;
    @ElementCollection
    private List<Languages> translations;
    @ElementCollection
    private List<Long> similarComix;

    public Comix() {
        // Пустой конструктор
    }

    public Comix(String title, String description, List<String> genre, int year, String publisher, Status status, String coverImage, List<String> tags, boolean inTop, List<String> images, List<Languages> translations, List<Long> similarComix) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.year = year;
        this.publisher = publisher;
        this.status = status;
        this.coverImage = coverImage;
        this.tags = tags;
        this.inTop = inTop;
        this.images = images;
        this.translations = translations;
        this.similarComix = similarComix;
    }

    // Геттеры и сеттеры
    public String getId() {
        return _id;
    }

    public void setId(String id) {
        this._id = String.valueOf(id);
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getGenre() {
        return genre;
    }

    public void setGenre(List<String> genre) {
        this.genre = genre;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getCoverImage() {
        return coverImage;
    }

    public void setCoverImage(String coverImage) {
        this.coverImage = coverImage;
    }



    public List<String> getTags() {
        return tags;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public boolean isInTop() {
        return inTop;
    }

    public void setInTop(boolean inTop) {
        this.inTop = inTop;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }

    public List<Languages> getTranslations() {
        return translations;
    }

    public void setTranslations(List<Languages> translations) {
        this.translations = translations;
    }

    public List<Long> getSimilarComix() {
        return similarComix;
    }

    public void setSimilarComix(List<Long> similarComix) {
        this.similarComix = similarComix;
    }
}



 enum Status {
    CLOSED,
    ONGOING,
    ETC
}


 enum Languages {
    ENGLISH,
    FRENCH,
    SPANISH,
    ETC
}
