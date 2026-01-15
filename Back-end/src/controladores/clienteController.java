@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @GetMapping("/reservas")
    public List<ReservaDTO> historico() { }

    @PostMapping("/reservar/{lugarId}")
    public void reservar(@PathVariable Long lugarId) { }

    @PostMapping("/entregar/{reservaId}")
    public void entregarReserva(@PathVariable Long reservaId) { }

    @PostMapping("/saldo")
    public void adicionarSaldo(@RequestBody Double valor) { }
}