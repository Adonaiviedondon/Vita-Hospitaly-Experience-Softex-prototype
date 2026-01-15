@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public LoginResponseDTO login(@RequestBody LoginRequestDTO dto) {
        return authService.login(dto);
    }

    @PostMapping("/register/cliente")
    public void registrarCliente(@RequestBody RegistroClienteDTO dto) {
        authService.registrarCliente(dto);
    }

    @PostMapping("/register/admin")
    public void registrarAdmin(@RequestBody RegistroAdminDTO dto) {
        authService.registrarAdmin(dto);
    }
}