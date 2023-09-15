package com.example.demo.service;

import com.example.demo.dto.CreatePokemonRequest;
import com.example.demo.dto.UpdatePokemonRequest;
import com.example.demo.exception.PokemonNotFoundException;
import com.example.demo.model.Pokemon;
import com.example.demo.repository.PokemonDao;
import com.example.demo.repository.PokemonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PokemonService {
    private final PokemonRepository pokemonRepository;
    private final PokemonConvertor pokemonConvertor;

    public PokemonService(PokemonRepository pokemonRepository, PokemonConvertor pokemonConvertor) {
        this.pokemonRepository = pokemonRepository;
        this.pokemonConvertor = pokemonConvertor;
    }

    public List<Pokemon> getAllPokemon() {
        return pokemonRepository.findAll().stream().map(pokemonConvertor::fromDao).toList();
    }

    public Pokemon getPokemonById(int id) {
        Optional<Pokemon> foundPokemon = pokemonRepository.findById(id).map(pokemonConvertor::fromDao);
        if (foundPokemon.isEmpty()) {
            throw new PokemonNotFoundException(id);
        } else {
            return foundPokemon.get();
        }
    }

    public Pokemon createPokemon(CreatePokemonRequest request) {
        PokemonDao pokemonDao = pokemonConvertor.fromCreateRequest(request);
        PokemonDao saved = pokemonRepository.save(pokemonDao);
        return pokemonConvertor.fromDao(saved);
    }

    public Pokemon deletePokemon(int id) {
        Optional<PokemonDao> foundPokemon = pokemonRepository.findById(id);
        if (foundPokemon.isEmpty()) {
            throw new PokemonNotFoundException(id);
        } else {
            PokemonDao deletedPokemon = pokemonRepository.delete(foundPokemon.get());
            return pokemonConvertor.fromDao(deletedPokemon);
        }
    }

    public Pokemon updatePokemon(int id, UpdatePokemonRequest request) {
        Optional<PokemonDao> foundPokemon = pokemonRepository.findById(id);

        if (foundPokemon.isEmpty()) {
            throw new PokemonNotFoundException(id);
        } else {
            PokemonDao pokemonDao = pokemonConvertor.fromUpdateRequest(id, request);
            PokemonDao saved = pokemonRepository.save(pokemonDao);
            return pokemonConvertor.fromDao(saved);
        }
    }

//    public Pokemon getPokemonById(int id) {
//        return pokemonRepository.findById(id)
//        .map(pokemonConvertor::fromDao)
//        .orElseThrow(() -> new PokemonNotFoundException(id));
//    }
}
