package com.ufcg.si1.service;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.ufcg.si1.model.Produto;
import com.ufcg.si1.repository.ProdutoRepository;

@Service("produtoService")
public class ProdutoServiceImpl implements ProdutoService {

	private static final AtomicLong counter = new AtomicLong();

	private ProdutoRepository produtoRepository;

	public ProdutoServiceImpl(ProdutoRepository produtoRepository) {
		this.produtoRepository = produtoRepository;
	}

	@Override
	public List<Produto> findAllProdutos() {
		return this.produtoRepository.findAll();
	}
	
	@Override
	public void saveProduto(Produto produto) {
		//produto.setId(counter.incrementAndGet());		
		this.produtoRepository.save(produto);
	}
	
	@Override
	public void updateProduto(Produto produto) {
		if (this.produtoRepository.exists(produto.getCodigoBarra())) {
			this.produtoRepository.delete(produto.getCodigoBarra());
			this.produtoRepository.save(produto);
		}
	}
	
	@Override
	public void deleteProdutoById(String id) {
		this.produtoRepository.delete(id);
	}

	@Override
	public int size() {
		return this.produtoRepository.findAll().size();
	}
	
	@Override
	public Iterator<Produto> getIterator() {
		return this.produtoRepository.findAll().iterator();
	}	

	@Override
	public Produto findById(String id) {
		return this.produtoRepository.findOne(id);
	}
	
	@Override
	public boolean doesProdutoExist(Produto produto) {
		return this.produtoRepository.exists(produto.getCodigoBarra());
	}
	
	public void deleteAllUsers() {
		return;
	}	
}