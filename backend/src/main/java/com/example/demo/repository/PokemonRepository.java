package com.example.demo.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;

@Repository
public class PokemonRepository {

    public Collection<PokemonDao> findAll() {
        return List.of();
    }

    public Optional<PokemonDao> findById(int id) {
        return Optional.empty();
    }

    public PokemonDao save(PokemonDao toSave) {
        return null;
    }

    public void deleteById(int id) {
        return;
    }
}
