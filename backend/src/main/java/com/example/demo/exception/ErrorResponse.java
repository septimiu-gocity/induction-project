package com.example.demo.exception;

import lombok.Getter;

@Getter
public class ErrorResponse {
    private final String type;
    private final String description;

    public ErrorResponse(String type, String description) {
        this.type = type;
        this.description = description;
    }
}

