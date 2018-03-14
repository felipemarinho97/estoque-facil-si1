package com.ufcg.si1.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ufcg.si1.model.User;
import com.ufcg.si1.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {
	@Autowired
	public UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findOneByEmail(username);
        
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }

		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), user.getAuthorities());
}
}
