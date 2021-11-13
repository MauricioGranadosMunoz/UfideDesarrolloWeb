/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import com.Ingresar;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jose Ramos
 */
public class PersonaRepositorio {
    private static List<Persona> Listapersonas=new ArrayList<>();

     public static List<Persona> getListaPersonas() {
        return Listapersonas;
    }
   
     public static void setListaPersonas(List<Persona> listaPersonas) {
        PersonaRepositorio.Listapersonas = listaPersonas;
    }
    public static void agregarPersona(Persona persona){
        Listapersonas.add(persona);
    }

    public static boolean existeIdentificacion(String identificacion){
        /*
        for(Persona persona : listaPersonas){
            if(persona.getIdentificacion().equals(identificacion))
                return true;
        }
        return false;
        */
        return Listapersonas.stream().anyMatch((persona) -> (persona.getIdentificacion().equals(identificacion)));
    }
}