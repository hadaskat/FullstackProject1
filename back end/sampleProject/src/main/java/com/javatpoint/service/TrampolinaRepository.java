package com.javatpoint.service;

import com.javatpoint.model.Category;
import com.javatpoint.model.Trampolina;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TrampolinaRepository extends JpaRepository<Trampolina,Long> {
//    public List<Category> findTrampolinaByCategory();
}
