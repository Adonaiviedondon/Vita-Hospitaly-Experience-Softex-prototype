package com.vita.hospitaly.controller;

import com.vita.hospitaly.dto.LugarDTO;
import com.vita.hospitaly.dto.ReservaDTO;
import com.vita.hospitaly.service.LugarService;
import com.vita.hospitaly.service.ReservaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

    @Autowired
    private LugarService lugarService;

    @Autowired
    private ReservaService reservaService;

    // 🔹 Criar lugar (admin)
    @PostMapping("/lugar")
    public ResponseEntity<Void> criarLugar(@RequestBody LugarDTO dto) {
        lugarService.criar(dto);
        return ResponseEntity.status(201).build();
    }

    // 🔹 Listar todas as reservas (admin)
    @GetMapping("/reservas")
    public ResponseEntity<List<ReservaDTO>> todasReservas() {
        List<ReservaDTO> reservas = reservaService.buscarTodas();
        return ResponseEntity.ok(reservas);
    }
}
