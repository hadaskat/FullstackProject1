package com.javatpoint.controller;

import com.javatpoint.model.Trampolina;
import com.javatpoint.DTO.TrampolinaDTO;
import com.javatpoint.service.MapStructMapper;
import com.javatpoint.service.TrampolinaRepository;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.convert.PeriodUnit;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/trampolina")
public class TrampolinaController {
    private final TrampolinaRepository trampolinaRepository;
    private final MapStructMapper mapStructMapper;

    @Autowired
    public TrampolinaController(TrampolinaRepository trampolinaRepository,MapStructMapper mapStructMapper){
        this.trampolinaRepository=trampolinaRepository;
        this.mapStructMapper=mapStructMapper;
    }
    //=====מחזיר רשימה של טרמפולינות=========
    @GetMapping("/Trampolinas")
    public List<TrampolinaDTO> getAllTrampolinas(){
        return mapStructMapper.TrampolinaToDtos(trampolinaRepository.findAll());
    }
    //========מחזיר אובייקט ע''פ קוד==========
    @GetMapping("/{id}")
    public ResponseEntity<?> getTrampolina(@PathVariable Long id){
        Optional<Trampolina> t=trampolinaRepository.findById(id);
        return t.map(Trampolina1-> ResponseEntity.ok().body(Trampolina1)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    //=========הוספה של טרמפולינה======
    @PostMapping
    public ResponseEntity<TrampolinaDTO> createTrampolina(@RequestBody TrampolinaDTO t)throws URISyntaxException{
        Trampolina newTrampolina=trampolinaRepository.save(mapStructMapper.DtoToTrampolina(t));
        return ResponseEntity.created(new URI("/api/trampolina"+ newTrampolina.getId())).body(mapStructMapper.TrampolinaToDto(newTrampolina));
    }
    //======עדכון של טרמפולינה========
    @PutMapping("/{id}")
    public ResponseEntity<?> updateTrampolina(@PathVariable Long id,@RequestBody Trampolina t)throws URISyntaxException {
        if(id!=t.getId())
            return ResponseEntity.badRequest().build();
        Trampolina updateTrampolina=trampolinaRepository.save(t);
        return ResponseEntity.created(new URI("/api/trampolina"+ updateTrampolina.getId())).body(updateTrampolina);
    }
    //=======מחיקת טרמפולינה==========
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTrampolina(@PathVariable Long id){
        trampolinaRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
