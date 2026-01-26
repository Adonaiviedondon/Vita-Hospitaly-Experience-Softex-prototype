@Service
public class AuthService {

    @Autowired
    private UsuarioRepository repository;

    public Usuario login(String login, String senha) {
        Usuario usuario = repository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!usuario.getSenha().equals(senha)) {
            throw new RuntimeException("Senha incorreta");
        }

        return usuario;
    }
}
