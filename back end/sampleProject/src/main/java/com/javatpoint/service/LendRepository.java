package com.javatpoint.service;

import com.javatpoint.model.Lend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LendRepository extends JpaRepository<Lend,Long> {

}
