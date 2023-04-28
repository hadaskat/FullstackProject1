package com.javatpoint.DTO;

import com.javatpoint.model.Category;
import com.javatpoint.model.Lend;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;

public class TrampolinaDTO {
    private Long id;
    private String name;
    private String description;
    private int price;
    private Long categoryId;
    private String image;

    public TrampolinaDTO() {
    }

    public TrampolinaDTO(Long id, String name, String description, int price, Long categoryId, String image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.categoryId = categoryId;
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}