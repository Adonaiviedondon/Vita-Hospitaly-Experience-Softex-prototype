@Configuration
public class DataLoader {

    @Bean
    CommandLineRunner initUsuarios(UsuarioRepository repository) {
        return args -> {

            if (repository.findByLogin("admin").isEmpty()) {
                Usuario admin = new Usuario();
                admin.setLogin("admin");
                admin.setSenha("56789");
                admin.setTipoUsuario(TipoUsuario.ADMIN);
                admin.setNome("Administrador");
                repository.save(admin);
            }

            if (repository.findByLogin("cliente").isEmpty()) {
                Usuario cliente = new Usuario();
                cliente.setLogin("cliente");
                cliente.setSenha("01234");
                cliente.setTipoUsuario(TipoUsuario.CLIENTE);
                cliente.setNome("Cliente Padrão");
                repository.save(cliente);
            }
        };
    }
}
