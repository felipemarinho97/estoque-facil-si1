package com.ufcg.si1.model;

import java.util.ArrayList;
import java.util.List;

import exceptions.ObjetoInvalidoException;

public class Produto {

	private long id;

	private String nome;

	private String codigoBarra;

	private String fabricante;

	private List categorias = new ArrayList();

	public int situacao; // usa variaveis estaticas abaixo
	/* situacoes do produto */
	public static final int DISPONIVEL = 1;
	public static final int EM_FALTA = 2;

	public Produto() {
		id = 0;
	}

	public Produto(long id, String nome, String codigoBarra, String fabricante, List categorias) {
		this.id = id;
		this.nome = nome;
		this.codigoBarra = codigoBarra;
		this.fabricante = fabricante;
		this.categorias = categorias;
		this.situacao = Produto.EM_FALTA;
	}

	public String getNome() {
		return nome;
	}

	public void mudaNome(String nome) {
		this.nome = nome;
	}

	public long getId() {
		return id;
	}

	public void mudaId(long codigo) {
		this.id = codigo;
	}

	public String getFabricante() {
		return fabricante;
	}

	public void mudaFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	public String getCodigoBarra() {
		return codigoBarra;
	}

	public void setCodigoBarra(String codigoBarra) {
		this.codigoBarra = codigoBarra;
	}

	public List<Categoria> getCategorias() {
		return this.categorias;
	}

	public void adicionarCategorias(Categoria cat) {
		this.categorias.add(cat);
	}

	public void mudaCategorias(List categorias) {
		this.categorias = categorias;
	}

	public void mudaSituacao(int situacao) throws ObjetoInvalidoException {
		if (situacao == Produto.DISPONIVEL || situacao == Produto.EM_FALTA) {
			this.situacao = situacao;
		} else {
			throw new ObjetoInvalidoException("Situação Inválida");
		}
	}

	public int getSituacao() throws ObjetoInvalidoException {
		return this.situacao;
	}
}
