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

            // resposta PADRONIZADA
            return ResponseEntity.ok(
                Map.of(
                    "id", usuario.getId(),
                    "tipoUsuario", usuario.getTipoUsuario(),
                    "login", usuario.getLogin()
                )
            );

        } catch (RuntimeException e) {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Usuário ou senha incorretos");
        }
    }
}
