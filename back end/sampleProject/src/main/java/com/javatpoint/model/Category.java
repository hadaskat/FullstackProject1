package com.javatpoint.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Category {
@Id
@GeneratedValue
    private Long id;

    private String name;
    private String description;
    @JsonIgnore
    @OneToMany(mappedBy = "category")
    private List<Trampolina> trampolinaList;

    public Category() {
    }

    public Category(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
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
    public List<Trampolina> getTrampolinaList() {
        return trampolinaList;
    }

    public void setTrampolinaList(List<Trampolina> trampolinaList) {
        this.trampolinaList = trampolinaList;
    }
}
