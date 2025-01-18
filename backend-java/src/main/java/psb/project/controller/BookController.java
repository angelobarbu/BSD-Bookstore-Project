package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.dto.BookFilterInputDTO;
import psb.project.dto.BookInputDTO;
import psb.project.model.Book;
import psb.project.service.BookService;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Integer id) {
        return bookService.getBookById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody BookInputDTO bookInputDTO) {
        return ResponseEntity.ok(bookService.addBook(bookInputDTO));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody BookInputDTO bookInputDTO) {
        return bookService.updateBook(id, bookInputDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
        boolean deleted = bookService.deleteBook(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Book>> filterBooks(
            @RequestBody(required = false) BookFilterInputDTO bookFilterInputDTO,
            @RequestParam(required = false, defaultValue = "RELEVANCE") String sortBy) {

        List<Book> books;

        books = bookService.filterAndSortBooks(bookFilterInputDTO, sortBy);

        return ResponseEntity.ok(books);
    }

}

