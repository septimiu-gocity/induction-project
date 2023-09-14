package com.example.demo.service;

import com.example.demo.model.Pokemon;
import com.example.demo.repository.PokemonDao;
import java.util.Random;
import org.springframework.stereotype.Component;

@Component
public class PokemonConvertor {

    public Pokemon fromDao(PokemonDao pokemonDao) {
        return new Pokemon(
            pokemonDao.getId(),
            pokemonDao.getName(),
            pokemonDao.getHeight(),
            pokemonDao.getWeight(),
            pokemonDao.getTypes(),
            pokemonDao.getSprite()
        );
    }

    public PokemonDao toDao(Pokemon pokemon) {
        return new PokemonDao(
            pokemon.getId(),
            pokemon.getName(),
            pokemon.getHeight(),
            pokemon.getWeight(),
            pokemon.getTypes(),
            pokemon.getSprite()
        );
    }
}
