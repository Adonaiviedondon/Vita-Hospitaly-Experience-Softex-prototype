@RestController
@RequestMapping("/usuarios")
@CrossOrigin
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
        return ResponseEntity.ok(usuarioService.cadastrar(usuario));
    }

    @PutMapping("/{login}")
    public ResponseEntity<Usuario> atualizar(
            @PathVariable String login,
            @RequestBody Usuario usuarioAtualizado) {

        Usuario usuario = usuarioService.atualizar(login, usuarioAtualizado);
        return ResponseEntity.ok(usuario);
    }

    @DeleteMapping("/{login}")
    public ResponseEntity<Void> deletar(@PathVariable String login) {
        usuarioService.deletar(login);
        return ResponseEntity.noContent().build();
    }
}
