package com.ufcg.si1.controller;

import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ufcg.si1.model.Produto;
import com.ufcg.si1.service.ProdutoService;
import com.ufcg.si1.util.CustomErrorType;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ProdutoController {

	private ProdutoService produtoService;
	
	public ProdutoController(ProdutoService produtoService) {
		this.produtoService = produtoService;
	}	

	@RequestMapping(value = "/produto/", method = RequestMethod.GET)
	public ResponseEntity<List<Produto>> listarProdutos() {
		List<Produto> produtos = produtoService.findAllProdutos();

		if (produtos.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Produto>>(produtos, HttpStatus.OK);
	}

	@RequestMapping(value = "/produto/", method = RequestMethod.POST)
	public ResponseEntity<?> criarProduto(@RequestBody Produto produto, UriComponentsBuilder ucBuilder) {
		
		if (produtoService.doesProdutoExist(produto)) {
			return new ResponseEntity<>(new CustomErrorType("O produto " + produto.getNome() + " do fabricante "
					+ produto.getFabricante() + " ja esta cadastrado!"), HttpStatus.CONFLICT);
		}
		
		produto.setSituacao(Produto.INDISPONIVEL);

		produtoService.saveProduto(produto);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/produto/{id}").buildAndExpand(produto.getId()).toUri());

		return new ResponseEntity<Produto>(produto, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/produto/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> consultarProduto(@PathVariable("id") long id) {

		Produto produto = produtoService.findById(id);

		if (produto == null) {
			return new ResponseEntity<>(new CustomErrorType("Produto com id " + id + " nao encontrado."),
					HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Produto>(produto, HttpStatus.OK);
	}

	@RequestMapping(value = "/produto/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProduto(@PathVariable("id") long id, @RequestBody Produto produto) {

		Produto currentProduto = produtoService.findById(id);

		if (currentProduto == null) {
			return new ResponseEntity<>(new CustomErrorType("Impossivel atualizar. Produto com id " + id + " nao encontrado."),
					HttpStatus.NOT_FOUND);
		}

		currentProduto.setNome(produto.getNome());
		currentProduto.setPreco(produto.getPreco());
		currentProduto.setRealPreco(produto.getRealPreco());
		currentProduto.setCodigoBarra(produto.getCodigoBarra());
		currentProduto.setFabricante(produto.getFabricante());
		currentProduto.setCategoria(produto.getCategoria());

		produtoService.updateProduto(currentProduto);
		return new ResponseEntity<Produto>(currentProduto, HttpStatus.OK);
	}

	@RequestMapping(value = "/produto/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteProduto(@PathVariable("id") long id) {

		Produto produto = produtoService.findById(id);

		if (produto == null) {
			return new ResponseEntity<>(new CustomErrorType("Impossivel deletar. Produto com id " + id + " nao encontrado."),
					HttpStatus.NOT_FOUND);
		}
		
		produtoService.deleteProdutoById(id);
		return new ResponseEntity<Produto>(HttpStatus.OK);
	}
}