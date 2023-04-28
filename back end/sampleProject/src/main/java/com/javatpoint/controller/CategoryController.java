
package com.javatpoint.controller;

import com.javatpoint.model.Category;
import com.javatpoint.service.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/api/category")
public class CategoryController {
    private final CategoryRepository categoryRepository;

    @Autowired
    public CategoryController(CategoryRepository categoryRepository){
        this.categoryRepository=categoryRepository;
    }
    //=====מחזיר רשימה של קטרגוריות=========
    @GetMapping("/Categories")
    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }
    //========מחזיר קטגוריה ע''פ קוד==========
    @GetMapping("/{id}")
    public ResponseEntity<?> getCategory(@PathVariable Long id){
        Optional<Category> c=categoryRepository.findById(id);
        return c.map(Category1-> ResponseEntity.ok().body(Category1)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //=========הוספה של קטגוריה======
    @PostMapping
    public ResponseEntity<Category> createUser(@RequestBody Category u)throws URISyntaxException{
        Category newCategory=categoryRepository.save(u);
        return ResponseEntity.created(new URI("/api/category"+ newCategory.getId())).body(newCategory);
    }
    //======עדכון של קטגוריה========
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@PathVariable Long id,@RequestBody Category c)throws URISyntaxException {
        if(id!=c.getId())
            return ResponseEntity.badRequest().build();
        Category updateCategory=categoryRepository.save(c);
        return ResponseEntity.created(new URI("/api/category"+ updateCategory.getId())).body(updateCategory);
    }
    //=======מחיקת קטגוריה==========
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategory(@PathVariable Long id){
        categoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

