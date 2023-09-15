package com.example.demo.dto;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Value;

@Data
public class CreatePokemonRequest {
    String name;
    int height;
    int weight;
    List<String> types;
    String sprite;
}
