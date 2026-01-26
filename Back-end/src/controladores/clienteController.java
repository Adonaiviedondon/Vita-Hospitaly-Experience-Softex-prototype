package com.vita.hospitaly.controller;

import com.vita.hospitaly.dto.ReservaDTO;
import com.vita.hospitaly.service.ReservaService;
import com.vita.hospitaly.service.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private ClienteService clienteService;

    @GetMapping("/reservas/{clienteId}")
    public ResponseEntity<List<ReservaDTO>> historico(@PathVariable Long clienteId) {
        List<ReservaDTO> reservas = reservaService.buscarPorCliente(clienteId);
        return ResponseEntity.ok(reservas);
    }

    
    @PostMapping("/reservar")
    public ResponseEntity<Void> reservar(
            @RequestParam Long clienteId,
            @RequestParam Long lugarId) {

        reservaService.reservar(lugarId, clienteId);
        return ResponseEntity.ok().build();
    }

    
    @PostMapping("/entregar/{reservaId}")
    public ResponseEntity<Void> entregarReserva(@PathVariable Long reservaId) {
        reservaService.finalizarReserva(reservaId);
        return ResponseEntity.ok().build();
    }

    
    @PostMapping("/saldo/{clienteId}")
    public ResponseEntity<Void> adicionarSaldo(
            @PathVariable Long clienteId,
            @RequestBody Double valor) {

        clienteService.adicionarSaldo(clienteId, valor);
        return ResponseEntity.ok().build();
    }
}
