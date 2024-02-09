package com.bootcamp.gestorApp.exceptions;

public class ValidateErrors extends RuntimeException {
	
    public static final String MESSAGE = "Error al intentar eliminar un recurso.";

    public ValidateErrors() {
        super(MESSAGE);
    }

    public ValidateErrors(String message) {
        super(message);
    }

}
