package com.javatpoint.model;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import javax.persistence.*;

@Entity
public class Trampolina {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String description;
    private int price;
    private String image;//"t.jpg"
    @ManyToOne
    private Category category;
    @JsonIgnore
   @OneToMany(mappedBy = "trampolina")
   private List<Lend> lendList;

    public Trampolina() {
    }

    public Trampolina(Long id, String name, String description, int price, String image, Category category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category;
    }



    public void setCategory(Category category) {
        this.category = category;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Category getCategory() {
        return category;
    }

    public List<Lend> getLendList() {
        return lendList;
    }

    public void setLendList(List<Lend> lendList) {
        this.lendList = lendList;
    }
}
