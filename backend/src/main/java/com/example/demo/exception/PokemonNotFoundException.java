package com.example.demo.exception;
import lombok.Getter;


public class PokemonNotFoundException extends RuntimeException {
    @Getter
    private final int pokemonId;

    public PokemonNotFoundException(int pokemonId) {
        this.pokemonId = pokemonId;
    }


//    public int getPokemonId(){
//        return pokemonId;
//    }
}
