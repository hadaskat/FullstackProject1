package com.javatpoint.service;

import com.javatpoint.DTO.TrampolinaDTO;
import com.javatpoint.model.Category;
import com.javatpoint.model.Trampolina;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-04-28T13:47:11+0300",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_91 (Oracle Corporation)"
)
@Component
public class MapStructMapperImpl implements MapStructMapper {

    @Override
    public TrampolinaDTO TrampolinaToDto(Trampolina d) {
        if ( d == null ) {
            return null;
        }

        TrampolinaDTO trampolinaDTO = new TrampolinaDTO();

        trampolinaDTO.setCategoryId( dCategoryId( d ) );
        trampolinaDTO.setId( d.getId() );
        trampolinaDTO.setName( d.getName() );
        trampolinaDTO.setDescription( d.getDescription() );
        trampolinaDTO.setPrice( d.getPrice() );
        trampolinaDTO.setImage( d.getImage() );

        return trampolinaDTO;
    }

    @Override
    public Trampolina DtoToTrampolina(TrampolinaDTO d) {
        if ( d == null ) {
            return null;
        }

        Trampolina trampolina = new Trampolina();

        trampolina.setCategory( trampolinaDTOToCategory( d ) );
        trampolina.setId( d.getId() );
        trampolina.setName( d.getName() );
        trampolina.setDescription( d.getDescription() );
        trampolina.setPrice( d.getPrice() );
        trampolina.setImage( d.getImage() );

        return trampolina;
    }

    @Override
    public List<TrampolinaDTO> TrampolinaToDtos(List<Trampolina> list) {
        if ( list == null ) {
            return null;
        }

        List<TrampolinaDTO> list1 = new ArrayList<TrampolinaDTO>( list.size() );
        for ( Trampolina trampolina : list ) {
            list1.add( TrampolinaToDto( trampolina ) );
        }

        return list1;
    }

    private Long dCategoryId(Trampolina trampolina) {
        if ( trampolina == null ) {
            return null;
        }
        Category category = trampolina.getCategory();
        if ( category == null ) {
            return null;
        }
        Long id = category.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    protected Category trampolinaDTOToCategory(TrampolinaDTO trampolinaDTO) {
        if ( trampolinaDTO == null ) {
            return null;
        }

        Category category = new Category();

        category.setId( trampolinaDTO.getCategoryId() );

        return category;
    }
}
