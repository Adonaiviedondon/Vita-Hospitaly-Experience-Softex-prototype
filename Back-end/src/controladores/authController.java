@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO dto) {
        try {
            Usuario usuario = authService.login(dto.getLogin(), dto.getSenha());

            LoginResponseDTO response = new LoginResponseDTO(
                    usuario.getId(),
                    usuario.getTipoUsuario(),
                    usuario.getLogin()
            );

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Usuário ou senha incorretos");
        }
    }

    @PostMapping("/register/cliente")
    public ResponseEntity<Void> registrarCliente(@RequestBody RegistroClienteDTO dto) {
        authService.registrarCliente(dto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/register/admin")
    public ResponseEntity<Void> registrarAdmin(@RequestBody RegistroAdminDTO dto) {
        authService.registrarAdmin(dto);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}
