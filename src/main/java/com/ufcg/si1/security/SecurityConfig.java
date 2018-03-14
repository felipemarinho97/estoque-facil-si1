package com.ufcg.si1.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import java.util.*;
import com.ufcg.si1.model.*;
import com.ufcg.si1.repository.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
    @Autowired
    private AuthService authService;
    
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests()
			.antMatchers("/admin/**").hasAnyRole("ADMIN").and()
			.authorizeRequests()
            .anyRequest().permitAll()
			.and().httpBasic();
	}
	
	// @Override
	// protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	// 	auth.userDetailsService(authService);
	// 	createAdmin();
	// }

	// @Autowired
	// private UserRepository userRepository;
	// @Autowired
	// private RoleRepository roleRepository;
	// private BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

	// private void createAdmin() {
	// 	Role role = new Role();
	// 	role.setAuthority("ADMIN");
	// 	roleRepository.save(role);
	// 	List<Role> roles = new ArrayList();
	// 	roles.add(role);
	// 	User user = new User();
	// 	user.setEmail("admin");
	// 	user.setPassword("admin");
	// 	user.setRoles(roles);
	// 	userRepository.save(user);
	// }

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		  auth.inMemoryAuthentication().withUser("admin").password("admin").roles("ADMIN");
	}
}
