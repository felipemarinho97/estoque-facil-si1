package com.ufcg.si1.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ufcg.si1.model.Lote;
import com.ufcg.si1.model.Produto;
import com.ufcg.si1.model.DTO.LoteDTO;
import com.ufcg.si1.service.LoteService;
import com.ufcg.si1.service.LoteServiceImpl;
import com.ufcg.si1.service.ProdutoService;
import com.ufcg.si1.service.ProdutoServiceImpl;
import com.ufcg.si1.util.CustomErrorType;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LoteController {
	
	ProdutoService produtoService = new ProdutoServiceImpl();
	LoteService loteService = new LoteServiceImpl();
	
	@RequestMapping(value = "/produto/{id}/lote", method = RequestMethod.POST)
	public ResponseEntity<?> criarLote(@PathVariable("id") long produtoId, @RequestBody LoteDTO loteDTO) {
		Produto produto = produtoService.findById(produtoId);

		if (produto == null) {
			return new ResponseEntity(
					new CustomErrorType("Impossivel criar lote. Produto com id " + produtoId + " nao encontrado."),
					HttpStatus.NOT_FOUND);
		}

		Lote lote = loteService.saveLote(new Lote(produto, loteDTO.getNumeroDeItens(), loteDTO.getDataDeValidade()));

			if (produto.getSituacao() == Produto.INDISPONIVEL) {
				if (loteDTO.getNumeroDeItens() > 0) {
					produto.setSituacao(Produto.DISPONIVEL);
					produtoService.updateProduto(produto);
				}
			}

		return new ResponseEntity<>(lote, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/lote/", method = RequestMethod.GET)
	public ResponseEntity<List<Lote>> listAllLotess() {
		List<Lote> lotes = loteService.findAllLotes();

		if (lotes.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<Lote>>(lotes, HttpStatus.OK);
	}
}
