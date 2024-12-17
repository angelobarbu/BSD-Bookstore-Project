package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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
    public ResponseEntity<Book> addBook(@RequestBody Book book) {
        return ResponseEntity.ok(bookService.addBook(book));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
        return bookService.updateBook(id, bookDetails)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
        boolean deleted = bookService.deleteBook(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<Book>> searchBooksByTitle(@RequestParam String title) {
        return ResponseEntity.ok(bookService.searchBooksByTitle(title));
    }

    @GetMapping("/filter/language")
    public ResponseEntity<List<Book>> filterByLanguage(@RequestParam String language) {
        return ResponseEntity.ok(bookService.filterByLanguage(language));
    }

    @GetMapping("/filter/format")
    public ResponseEntity<List<Book>> filterByFormat(@RequestParam String format) {
        return ResponseEntity.ok(bookService.filterByFormat(format));
    }

    @GetMapping("/filter/year")
    public ResponseEntity<List<Book>> filterByYear(@RequestParam Integer year) {
        return ResponseEntity.ok(bookService.filterByYear(year));
    }

    @GetMapping("/search/isbn")
    public ResponseEntity<Book> searchByIsbn(@RequestParam String isbn) {
        return bookService.searchByIsbn(isbn)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/filter/publisher")
    public ResponseEntity<List<Book>> filterByPublisher(@RequestParam Integer publisherID) {
        return ResponseEntity.ok(bookService.filterByPublisher(publisherID));
    }
}
