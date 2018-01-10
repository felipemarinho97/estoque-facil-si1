package com.ufcg.si1.service;

import com.ufcg.si1.model.Categoria;
import com.ufcg.si1.model.Produto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service("produtoService")
public class ProdutoServiceImpl implements ProdutoService {

	private static final AtomicLong counter = new AtomicLong();

	private static List<Produto> produtos;

	static {
		produtos = populateDummyProdutos();
	}

	private static List<Produto> populateDummyProdutos() {
		List<Produto> produtos = new ArrayList<Produto>();

		Categoria mercearia = new Categoria(1, "Mercearia");
		Categoria pereciveis = new Categoria(2, "Perecíveis");
		Categoria limpeza = new Categoria(3, "Limpeza");
		Categoria higiene = new Categoria(4, "Higiene");

		List<Categoria> lista1 = new ArrayList<Categoria>();
		lista1.add(pereciveis);
		produtos.add(new Produto(counter.incrementAndGet(), "Leite Integral", "87654321-B", "Parmalat", lista1));

		List<Categoria> lista2 = new ArrayList<Categoria>();
		lista2.add(mercearia);
		produtos.add(new Produto(counter.incrementAndGet(), "Arroz Integral", "87654322-B", "Tio João", lista2));

		List<Categoria> lista3 = new ArrayList<Categoria>();
		lista3.add(limpeza);
		produtos.add(new Produto(counter.incrementAndGet(), "Sabão em Pó", "87654323-B", "OMO", lista3));

		List<Categoria> lista4 = new ArrayList<Categoria>();
		lista4.add(limpeza);
		produtos.add(new Produto(counter.incrementAndGet(), "Água Sanitária", "87654324-C", "Dragão", lista4));

		List<Categoria> lista5 = new ArrayList<Categoria>();
		lista5.add(higiene);
		produtos.add(new Produto(counter.incrementAndGet(), "Creme Dental", "87654325-C", "Colgate", lista5));

		return produtos;
	}

	public List<Produto> findAllProdutos() {
		return produtos;
	}

	public void saveProduto(Produto produto) {
		produto.mudaId(counter.incrementAndGet());
		produtos.add(produto);
	}

	public void updateProduto(Produto produto) {
		int index = produtos.indexOf(produto);
		produtos.set(index, produto);
	}

	public void deleteProdutoById(long id) {

		for (Iterator<Produto> iterator = produtos.iterator(); iterator.hasNext();) {
			Produto p = iterator.next();
			if (p.getId() == id) {
				iterator.remove();
			}
		}
	}

	// este metodo nunca eh chamado, mas se precisar estah aqui
	public int size() {
		return produtos.size();
	}

	public Iterator<Produto> getIterator() {
		return produtos.iterator();
	}

	public void deleteAllUsers() {
		produtos.clear();
	}

	public Produto findById(long id) {
		for (Produto produto : produtos) {
			if (produto.getId() == id) {
				return produto;
			}
		}
		return null;
	}

	public boolean doesProdutoExist(Produto produto) {
		for (Produto p : produtos) {
			if (p.getCodigoBarra().equals(produto.getCodigoBarra())) {
				return true;
			}
		}
		return false;
	}
}
