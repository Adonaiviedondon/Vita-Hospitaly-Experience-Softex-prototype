@Transactional
public void adicionarSaldo(Long clienteId, Double valor) {

    if (valor <= 0) {
        throw new BusinessException("Valor inválido");
    }

    Usuario cliente = usuarioRepository.findById(clienteId)
        .orElseThrow(() -> new BusinessException("Cliente não encontrado"));

    cliente.setSaldo(cliente.getSaldo() + valor);
    usuarioRepository.save(cliente);
}
