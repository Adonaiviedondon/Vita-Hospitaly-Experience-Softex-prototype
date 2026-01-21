@PostMapping("/reservar/{id}")
public ResponseEntity<?> reservar(@PathVariable Long id,
                                  @AuthenticationPrincipal Usuario cliente) {
    try {
        reservaService.reservar(id, cliente);
        return ResponseEntity.ok().build();
    } catch (BusinessException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}
