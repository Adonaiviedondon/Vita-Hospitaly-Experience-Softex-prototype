package com.vita.hospitaly.service;

import com.vita.hospitaly.dto.LoginDTO;
import com.vita.hospitaly.dto.RegistroAdminDTO;
import com.vita.hospitaly.dto.RegistroClienteDTO;
import com.vita.hospitaly.model.Usuario;
import com.vita.hospitaly.repository.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    
    public Usuario login(String login, String senha) {

        Usuario usuario = usuarioRepository.findByLogin(login)
                .orElseThrow(() -> new RuntimeException("Usuário ou senha incorretos"));

        if (!usuario.getSenha().equals(senha)) {
            throw new RuntimeException("Usuário ou senha incorretos");
        }

        return usuario;
    }

  
    public void registrarCliente(RegistroClienteDTO dto) {

        if (usuarioRepository.findByLogin(dto.getLogin()).isPresent()) {
            throw new RuntimeException("Usuário já existe");
        }

        Usuario usuario = new Usuario();
        usuario.setLogin(dto.getLogin());
        usuario.setSenha(dto.getSenha());
        usuario.setTipoUsuario("CLIENTE");
        usuario.setNome(dto.getNome());
        usuario.setCpf(dto.getCpf());
        usuario.setIdade(dto.getIdade());
        usuario.setSexo(dto.getSexo());
        usuario.setSaldo(0.0);

        usuarioRepository.save(usuario);
    }

    
    public void registrarAdmin(RegistroAdminDTO dto) {

        if (usuarioRepository.findByLogin(dto.getLogin()).isPresent()) {
            throw new RuntimeException("Usuário já existe");
        }

        Usuario usuario = new Usuario();
        usuario.setLogin(dto.getLogin());
        usuario.setSenha(dto.getSenha());
        usuario.setTipoUsuario("ADMIN");
        usuario.setCpf(dto.getCpf());
        usuario.setIdade(dto.getIdade());
        usuario.setSexo(dto.getSexo());

        usuarioRepository.save(usuario);
    }
}
