
package com.javatpoint.controller;

import com.javatpoint.model.Lend;
import com.javatpoint.service.LendRepository;
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
@RequestMapping("/api/lend")
public class LendController {
    private final LendRepository lendRepository;

    @Autowired
    public LendController(LendRepository lendRepository){
        this.lendRepository=lendRepository;
    }
    //=====מחזיר רשימה של השאלות=========
    @GetMapping("/Lends")
    public List<Lend> getAllLend(){
        return lendRepository.findAll();
    }
    //========מחזיר השאלה ע''פ קוד==========
    @GetMapping("/{id}")
    public ResponseEntity<?> getLend(@PathVariable Long id){
        Optional<Lend> l=lendRepository.findById(id);
        return l.map(Lend1-> ResponseEntity.ok().body(Lend1)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //=========הוספה של השאלה======
    @PostMapping
    public ResponseEntity<Lend> createLend(@RequestBody Lend l)throws URISyntaxException{
        Lend newLend=lendRepository.save(l);
        return ResponseEntity.created(new URI("/api/Lend"+ newLend.getId())).body(newLend);
    }

    //======עדכון של השאלה========
    @PutMapping("/{id}")
    public ResponseEntity<?> updateLend(@PathVariable Long id,@RequestBody Lend l)throws URISyntaxException {
        if(id!=l.getId())
            return ResponseEntity.badRequest().build();
        Lend updateLend=lendRepository.save(l);
        return ResponseEntity.created(new URI("/api/Lend"+ updateLend.getId())).body(updateLend);
    }
    //=======מחיקת השאלה==========
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLend(@PathVariable Long id){
        lendRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

