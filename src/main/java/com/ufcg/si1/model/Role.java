package com.ufcg.si1.model;

import javax.persistence.ManyToOne;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

public class Role implements GrantedAuthority {
	
    @ManyToOne
    @JsonIgnore
    private User user;
    
    private String authority;

	@Override
	public String getAuthority() {
		return this.authority;
	}

}
