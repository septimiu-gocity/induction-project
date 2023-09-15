package com.example.demo.api;

import com.example.demo.dto.CreatePokemonRequest;
import com.example.demo.dto.UpdatePokemonRequest;
import com.example.demo.model.Pokemon;
import com.example.demo.service.PokemonService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.http.MediaType.TEXT_HTML_VALUE;

@RestController
@RequestMapping(value = "/pokemon", produces = APPLICATION_JSON_VALUE)
public class PokemonController
{
    private final PokemonService pokemonService;

    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }


    @GetMapping("")
    public List<Pokemon> getAllPokemon() {
        return pokemonService.getAllPokemon();
    }

    @GetMapping("/{id}")
    public Pokemon getPokemonById(@PathVariable("id") int id) {

        return pokemonService.getPokemonById(id);

    }

    @PostMapping(consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE)
    public Pokemon createPokemon(@RequestBody CreatePokemonRequest request) {
        return pokemonService.createPokemon(request);
    }

    @DeleteMapping("/{id}")
    public Pokemon deletePokemon(@PathVariable("id") int id) {
        return pokemonService.deletePokemon(id);
    }

    @PutMapping(path="/{id}", consumes = APPLICATION_JSON_VALUE, produces = APPLICATION_JSON_VALUE )
    public Pokemon updatePokemon(@PathVariable("id") int id, @RequestBody UpdatePokemonRequest request) {
        return pokemonService.updatePokemon(id, request);
    }

}
