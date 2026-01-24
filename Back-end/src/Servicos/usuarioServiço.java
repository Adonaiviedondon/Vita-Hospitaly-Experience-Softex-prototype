@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario cadastrar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Usuario atualizar(String login, Usuario novosDados) {
        Usuario existente = usuarioRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        existente.setSenha(novosDados.getSenha());
        existente.setCpf(novosDados.getCpf());
        existente.setIdade(novosDados.getIdade());
        existente.setSexo(novosDados.getSexo());

        return usuarioRepository.save(existente);
    }

    public void deletar(String login) {
        Usuario usuario = usuarioRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        usuarioRepository.delete(usuario);
    }
}
