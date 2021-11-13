/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com;

import dao.Juego;
import dao.Juegorepositorio;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Named;
import javax.enterprise.context.RequestScoped;

/**
 *
 * @author Jose Ramos
 */
@Named(value = "verPersonas")
@RequestScoped
public class verGanador extends Juego{
private List<Juego> listaPersonas=new ArrayList<Juego>();

    public List<Juego> getListaPersonas() {
        return listaPersonas;
    }

    public void setListaPersonas(List<Juego> listaPersonas) {
        this.listaPersonas = listaPersonas;
    }

    /**
     * Creates a new instance of VerPersonas
     */
    public verGanador() {
    }
    @PostConstruct
public void init(){
   // listaPersonas = Juegorepositorio.getListaPersonas();
}
}
