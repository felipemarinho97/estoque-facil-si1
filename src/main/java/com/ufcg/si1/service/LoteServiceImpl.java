package com.ufcg.si1.service;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import com.ufcg.si1.model.Lote;
import com.ufcg.si1.repository.LoteRepository;

import org.springframework.stereotype.Service;

@Service("loteService")
public class LoteServiceImpl implements LoteService {

	private static final AtomicLong counter = new AtomicLong();
	
	private LoteRepository loteRepository;
	
	public LoteServiceImpl(LoteRepository loteRepository) {
		this.loteRepository = loteRepository;
	}

	@Override
	public Lote saveLote(Lote lote) {
		lote.setId(counter.incrementAndGet());
		this.loteRepository.save(lote);
		return lote;
	}

	@Override
	public Lote findById(long id) {
		return this.loteRepository.findOne(id);
	}

	@Override
	public void updateProduto(Lote lote) {
		if (this.loteRepository.exists(lote.getId())) {
			this.loteRepository.delete(lote.getId());
			this.loteRepository.save(lote);
		}
	}

	@Override
	public void deleteLoteById(long id) {
		this.loteRepository.delete(id);
	}

	@Override
	public List<Lote> findAllLotes() {
		return this.loteRepository.findAll();
	}

	@Override
	public int size() {
		return this.loteRepository.findAll().size();
	}

	@Override
	public Iterator<Lote> getIterator() {
		return this.loteRepository.findAll().iterator();
	}
}
