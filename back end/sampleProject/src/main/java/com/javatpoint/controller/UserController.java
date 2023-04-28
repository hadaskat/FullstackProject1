package com.javatpoint.controller;

import com.javatpoint.model.User;
import com.javatpoint.service.UserRepository;
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
@RequestMapping("/api/user")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository=userRepository;
    }
    //=====מחזיר רשימה של משתמשים=========
    @GetMapping("/Users")
    public List<User> getAllUser(){
        return userRepository.findAll();
    }
    //========מחזיר משתמש ע''פ קוד==========
    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id){
        Optional<User> u=userRepository.findById(id);
        return u.map(User1-> ResponseEntity.ok().body(User1)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //=========הוספה של משתמש======
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User u)throws URISyntaxException{
        User newUser=userRepository.save(u);
        return ResponseEntity.created(new URI("/api/user"+ newUser.getId())).body(newUser);
    }
    //======עדכון של משתמש========
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id,@RequestBody User u)throws URISyntaxException {
        if(id!=u.getId())
            return ResponseEntity.badRequest().build();
        User updateUser=userRepository.save(u);
        return ResponseEntity.created(new URI("/api/user"+ updateUser.getId())).body(updateUser);
    }
    //=======מחיקת משתמש==========
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

