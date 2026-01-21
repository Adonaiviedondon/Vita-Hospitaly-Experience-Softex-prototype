@Transactional
public void reservar(Long reservaId, Usuario cliente) {

    
    if (cliente.getReservaAtiva() != null) {
        throw new BusinessException("Você já possui uma reserva ativa");
    }

    Reserva reserva = reservaRepository.findById(reservaId)
        .orElseThrow(() -> new BusinessException("Reserva não encontrada"));

    
    if (reserva.getStatus() != StatusReserva.DISPONIVEL) {
        throw new BusinessException("Reserva indisponível");
    }

    
    if (cliente.getSaldo() < reserva.getPreco()) {
        throw new BusinessException("Saldo insuficiente");
    }

    
    cliente.setSaldo(cliente.getSaldo() - reserva.getPreco());

    
    reserva.setStatus(StatusReserva.RESERVADA);
    cliente.setReservaAtiva(reserva);

    usuarioRepository.save(cliente);
    reservaRepository.save(reserva);

  
    HistoricoReserva historico = new HistoricoReserva();
    historico.setCliente(cliente);
    historico.setReserva(reserva);
    historico.setStatus(StatusReserva.RESERVADA);
    historico.setData(LocalDateTime.now());

    historicoRepository.save(historico);
}
