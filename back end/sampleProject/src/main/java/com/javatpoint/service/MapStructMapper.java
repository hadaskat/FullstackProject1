package com.javatpoint.service;

import com.javatpoint.DTO.TrampolinaDTO;
import com.javatpoint.model.Trampolina;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {
    @Mapping(source = "category.id",target = "categoryId")
    public TrampolinaDTO TrampolinaToDto(Trampolina d);
    @Mapping(source = "categoryId",target = "category.id")
    public Trampolina DtoToTrampolina(TrampolinaDTO d);

    public List<TrampolinaDTO> TrampolinaToDtos(List<Trampolina> list);


}

