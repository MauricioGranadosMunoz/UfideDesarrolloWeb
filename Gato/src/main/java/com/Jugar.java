/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com;

import dao.Juego;
import dao.Juegorepositorio;
import javax.inject.Named;
import javax.enterprise.context.RequestScoped;

/**
 *
 * @author Jose Ramos
 */
@Named(value = "ingresar")
@RequestScoped
public class Jugar extends Juego {

    private String mensajeIdentificacion;
    private Boolean bloquearBoton;

    /**
     * Creates a new instance of Ingresar
     */
    public Jugar() {
    }
//logica
    public void Gato(){
        
    }

    public void validar() {
        /*String identificacion = this.getIdentificacion();
        if(Juegorepositorio.existeIdentificacion(identificacion)){*/
        this.mensajeIdentificacion = "Identificación ya existe";
        this.bloquearBoton = true;

        this.bloquearBoton = false;
    }
}
