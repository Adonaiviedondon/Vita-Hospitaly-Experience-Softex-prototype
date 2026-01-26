package com.vita.hospitaly.controller;

import com.vita.hospitaly.model.Usuario;
import com.vita.hospitaly.service.ReservaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservas")
@CrossOrigin(origins = "*")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @PostMapping("/reservar/{id}")
    public ResponseEntity<?> reservar(
            @PathVariable Long id,
            @AuthenticationPrincipal Usuario cliente) {

        try {
            reservaService.reservar(id, cliente);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
