package com.example.demo.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@ControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(PokemonNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlePokemonNotFoundException(PokemonNotFoundException e) {
        ErrorResponse errorResponse = new ErrorResponse(
                "PokemonNotFound",
                "A pokemon was not found for id: '%d'.".formatted(e.getPokemonId())
        );

        return new ResponseEntity<>(errorResponse, NOT_FOUND);
    }
}
