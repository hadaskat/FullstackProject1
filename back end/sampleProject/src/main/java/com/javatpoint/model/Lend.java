package com.javatpoint.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.time.LocalDate;


@Entity
public class Lend {
    @Id
    @GeneratedValue
    private Long id;
    private LocalDate lendingDate;
    private LocalDate returnDate;

    @ManyToOne
    private User user;

    @ManyToOne
    private Trampolina trampolina;

    public Lend() {
    }
    public Lend(Long id, LocalDate lendingDate, LocalDate returnDate, Trampolina trampolina, User user) {
        this.id = id;
        this.lendingDate = lendingDate;
        this.returnDate = returnDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Trampolina getTrampolina() {
        return trampolina;
    }

    public void setTrampolina(Trampolina trampolina) {
        this.trampolina = trampolina;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getLendingDate() {
        return lendingDate;
    }

    public void setLendingDate(LocalDate lendingDate) {
        this.lendingDate = lendingDate;
    }

    public LocalDate getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDate returnDate) {
        this.returnDate = returnDate;
    }
}
