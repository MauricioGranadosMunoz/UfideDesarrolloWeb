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
@Named(value = "jugar")
@RequestScoped
public class Jugar extends Juego {

    private String mensajeIdentificacion;
    private Boolean bloquearBoton;

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

    @Override
    public String getPosicion1_1() {
        return posicion1_1;
    }
@Override
    public void setPosicion1_1(String posicion1_1) {
        this.posicion1_1 = posicion1_1;
    }
@Override
    public String getPosicion1_2() {
        return posicion1_2;
    }
@Override
    public void setPosicion1_2(String posicion1_2) {
        this.posicion1_2 = posicion1_2;
    }
@Override
    public String getPosicion1_3() {
        return posicion1_3;
    }
@Override
    public void setPosicion1_3(String posicion1_3) {
        this.posicion1_3 = posicion1_3;
    }
@Override
    public String getPosicion2_1() {
        return posicion2_1;
    }
@Override
    public void setPosicion2_1(String posicion2_1) {
        this.posicion2_1 = posicion2_1;
    }
@Override
    public String getPosicion2_2() {
        return posicion2_2;
    }
@Override
    public void setPosicion2_2(String posicion2_2) {
        this.posicion2_2 = posicion2_2;
    }
@Override
    public String getPosicion2_3() {
        return posicion2_3;
    }
@Override
    public void setPosicion2_3(String posicion2_3) {
        this.posicion2_3 = posicion2_3;
    }
@Override
    public String getPosicion3_1() {
        return posicion3_1;
    }
@Override
    public void setPosicion3_1(String posicion3_1) {
        this.posicion3_1 = posicion3_1;
    }
@Override
    public String getPosicion3_2() {
        return posicion3_2;
    }
@Override
    public void setPosicion3_2(String posicion3_2) {
        this.posicion3_2 = posicion3_2;
    }
@Override
    public String getPosicion3_3() {
        return posicion3_3;
    }
@Override
    public void setPosicion3_3(String posicion3_3) {
        this.posicion3_3 = posicion3_3;
    }
@Override
    public String getGanador() {
        return ganador;
    }
@Override
    public void setGanador(String ganador) {
        this.ganador = ganador;
    }
    
    

    /**
     * Creates a new instance of Ingresar
     */
    public Jugar() {

    }
//logica

//    public void Gato() {
//        //validar por filas
//        if (posicion1_1.equals(posicion1_2) && posicion1_1.equals(posicion1_3)) {//1,1 1,2 1,1 1,3
//            calcular(posicion1_1);
//        } else if (posicion2_1.equals(posicion2_2) && posicion2_1.equals(posicion2_3)) {//2,1 2,2 2,1 2,3
//            calcular(posicion2_1);
//        } else if (posicion3_1.equals(posicion3_2) && posicion3_1.equals(posicion3_3)) {//3,1 3,2 3,1 3,3
//            calcular(posicion3_1);
//        } //validar columnas
//        else if (posicion1_1 == posicion2_1 && posicion2_1 == posicion3_1) {//1,1 2,1 2,1 3,1
//            calcular(posicion1_1);
//        } else if (posicion1_2 == posicion2_2 && posicion2_2 == posicion3_2) {//1,2 2,2 2,2 3,2
//            calcular(posicion1_2);
//        } else if (posicion1_3 == posicion2_3 && posicion2_3 == posicion3_3) {//1,3 2,3 2,3 3,3
//            calcular(posicion1_3);
//        } //valifar x
//        else if (posicion1_1 == posicion2_2 && posicion2_2 == posicion3_3) {//1,1 2,2 2,2 3,3
//            calcular(posicion1_1);
//        } else if (posicion3_1 == posicion2_2 && posicion2_2 == posicion1_3) {//3,1 2,2 2,2 1,3   
//            calcular(posicion3_1);
//        }else{
//            ganador="Empate";
//        }
//
//    }
//
//    public String calcular(String n) {
//        
//        if (n.equals("x")) {
//            ganador="gana el jugador 1";
//        } else {
//            ganador = "gana el jugador 2";
//        }
//        return ganador;
//    }
    
    public void rondaGato() {
        if (posicion1_1.equals(posicion1_2) && posicion1_1.equals(posicion1_3)) {
            this.mensajeIdentificacion = "GANADOR";
        } else {
            this.mensajeIdentificacion = "NO GANA";
        }
    }

//    public void validar() {
//        /*String identificacion = this.getIdentificacion();
//        if(Juegorepositorio.existeIdentificacion(identificacion)){*/
//        this.mensajeIdentificacion = "Identificación ya existe";
////        this.bloquearBoton = true;
////
////        this.bloquearBoton = false;
//    }
}
