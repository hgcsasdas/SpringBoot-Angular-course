package com.example;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/books")
public class BookController {

	@GetMapping
	public List<Book> findAll(){
		System.out.println("findAll");
		return List.of(
				new Book(1L, "book 1"),
				new Book(2L, "book 2"),
				new Book(3L, "book 3")
				);
	}
	
	@GetMapping("/{id}")
	public Book findByid(@PathVariable Long id) {
	
		System.out.println("findAll");
		return new Book(id, "book example");
	
	}
}
