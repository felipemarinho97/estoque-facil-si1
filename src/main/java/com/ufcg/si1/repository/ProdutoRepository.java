package com.ufcg.si1.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ufcg.si1.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto ,Integer>{

}
