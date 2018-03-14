package com.ufcg.si1.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotEmpty;

@Entity
@Table(name = "PRODUCT_TABLE")
public class Produto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO )
	private long id;
	
	@Column
    @NotEmpty
	private String nome;

	@Column
    private BigDecimal preco;
	
	@Column
    private BigDecimal realPreco;

	@Column
    @NotEmpty
	private String codigoBarra;
	
	@Column
	@NotEmpty
	private String fabricante;
	
	@Column
	@NotEmpty
	private String categoria;
	
	@Column
	public boolean situacao; 
	
	public static final boolean DISPONIVEL = true;
	
	public static final boolean INDISPONIVEL = false;

	public Produto() {
		this.id = 0;
		this.preco = new BigDecimal(0);
		this.realPreco = this.preco;
	}

	public Produto(long id, String nome, String codigoBarra, String fabricante,
			String nomeCategoria) {
		this.id = id;
		this.nome = nome;
		this.preco = new BigDecimal(0);
		this.realPreco = this.preco;
		this.codigoBarra = codigoBarra;
		this.fabricante = fabricante;
		this.categoria = nomeCategoria;
		this.situacao = Produto.INDISPONIVEL;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public BigDecimal getPreco() {
		return preco;
	}

	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}
	
	public BigDecimal getRealPreco() {
		return realPreco;
	}

	public void setRealPreco(BigDecimal realPreco) {
		this.realPreco = realPreco;
	}

	public long getId() {
		return id;
	}

	public void setId(long codigo) {
		this.id = codigo;
	}

	public String getFabricante() {
		return fabricante;
	}

	public void setFabricante(String fabricante) {
		this.fabricante = fabricante;
	}

	public String getCodigoBarra() {
		return codigoBarra;
	}

	public void setCodigoBarra(String codigoBarra) {
		this.codigoBarra = codigoBarra;
	}

	public String getCategoria() {
		return this.categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
		
	public void setSituacao(boolean estahDisponivel) {
		if (estahDisponivel) {
			this.situacao = Produto.DISPONIVEL;
		} else {
			this.situacao = Produto.INDISPONIVEL;
		}
	}

	public boolean getSituacao() {
		return this.situacao;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fabricante == null) ? 0 : fabricante.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Produto other = (Produto) obj;
		if (fabricante == null) {
			if (other.fabricante != null)
				return false;
		} else if (!fabricante.equals(other.fabricante))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}
}
