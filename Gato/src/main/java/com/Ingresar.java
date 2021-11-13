/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com;

import dao.Persona;
import dao.PersonaRepositorio;
import javax.inject.Named;
import javax.enterprise.context.RequestScoped;

/**
 *
 * @author Jose Ramos
 */
@Named(value = "ingresar")
@RequestScoped
public class Ingresar extends Persona {
private String mensajeIdentificacion;
private Boolean bloquearBoton;
    /**
     * Creates a new instance of Ingresar
     */
    public Ingresar() {
    }

    public String getMensajeIdentificacion() {
        return mensajeIdentificacion;
    }

    public void setMensajeIdentificacion(String mensajeIdentificacion) {
        this.mensajeIdentificacion = mensajeIdentificacion;
    }

    public Boolean getBloquearBoton() {
        return bloquearBoton;
    }

    public void setBloquearBoton(Boolean bloquearBoton) {
        this.bloquearBoton = bloquearBoton;
    }
    
public String guardarInformacion(){
        PersonaRepositorio.agregarPersona(this);
        return "verPersonas";
    }
    public void validar(){
        String identificacion = this.getIdentificacion();
        if(PersonaRepositorio.existeIdentificacion(identificacion)){
            this.mensajeIdentificacion = "Identificación ya existe";
            this.bloquearBoton = true;
        }
        else{
            this.bloquearBoton = false;
        }
    }
}
