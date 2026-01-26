package com.vita.hospitaly.controller;

import com.vita.hospitaly.dto.LoginDTO;
import com.vita.hospitaly.model.Usuario;
import com.vita.hospitaly.service.AuthService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginDTO dto) {
        Usuario usuario = authService.login(dto.getLogin(), dto.getSenha());
        return ResponseEntity.ok(usuario);
    }
}
