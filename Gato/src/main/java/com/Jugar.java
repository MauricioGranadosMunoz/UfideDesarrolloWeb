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

    public void Gato() {
        //validar por filas
        if (posicion1_1.equals(posicion1_2) && posicion1_1.equals(posicion1_3)) {//1,1 1,2 1,1 1,3
            calcular(posicion1_1);
        } else if (posicion2_1.equals(posicion2_2) && posicion2_1.equals(posicion2_3)) {//2,1 2,2 2,1 2,3
            calcular(posicion2_1);
        } else if (posicion3_1.equals(posicion3_2) && posicion3_1.equals(posicion3_3)) {//3,1 3,2 3,1 3,3
            calcular(posicion3_1);
        } //validar columnas
        else if (posicion1_1 == posicion2_1 && posicion2_1 == posicion3_1) {//1,1 2,1 2,1 3,1
            calcular(posicion1_1);
        } else if (posicion1_2 == posicion2_2 && posicion2_2 == posicion3_2) {//1,2 2,2 2,2 3,2
            calcular(posicion1_2);
        } else if (posicion1_3 == posicion2_3 && posicion2_3 == posicion3_3) {//1,3 2,3 2,3 3,3
            calcular(posicion1_3);
        } //valifar x
        else if (posicion1_1 == posicion2_2 && posicion2_2 == posicion3_3) {//1,1 2,2 2,2 3,3
            calcular(posicion1_1);
        } else if (posicion3_1 == posicion2_2 && posicion2_2 == posicion1_3) {//3,1 2,2 2,2 1,3   
            calcular(posicion3_1);
        }

    }

    public String calcular(String n) {
        String text;
        if (n.equals("x")) {
            text = "gana el jugador 1";
        } else {
            text = "gana el jugador 2";
        }
        return text;
    }

    public void validar() {
        /*String identificacion = this.getIdentificacion();
        if(Juegorepositorio.existeIdentificacion(identificacion)){*/
        this.mensajeIdentificacion = "Identificación ya existe";
        this.bloquearBoton = true;

        this.bloquearBoton = false;
    }
}
