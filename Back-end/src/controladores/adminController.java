@RestController
@RequestMapping("/admin")
public class AdminController {

    @PostMapping("/lugar")
    public void criarLugar(@RequestBody LugarDTO dto) { }

    @GetMapping("/reservas")
    public List<ReservaDTO> todasReservas() { }
}