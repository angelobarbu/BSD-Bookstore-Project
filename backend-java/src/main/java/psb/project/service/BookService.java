package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.model.Book;
import psb.project.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Integer id) {
        return bookRepository.findById(id);
    }

    public Book addBook(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> updateBook(Integer id, Book bookDetails) {
        return bookRepository.findById(id).map(existingBook -> {
            existingBook.setTitle(bookDetails.getTitle());
            existingBook.setPrice(bookDetails.getPrice());
            existingBook.setDiscountPercentage(bookDetails.getDiscountPercentage());
            existingBook.setYearPublished(bookDetails.getYearPublished());
            existingBook.setLanguage(bookDetails.getLanguage());
            existingBook.setFormat(bookDetails.getFormat());
            existingBook.setIsbn(bookDetails.getIsbn());
            existingBook.setStockQuantity(bookDetails.getStockQuantity());
            existingBook.setDescription(bookDetails.getDescription());
            existingBook.setCoverImageURL(bookDetails.getCoverImageURL());
            existingBook.setPublisher(bookDetails.getPublisher());
            existingBook.setAuthors(bookDetails.getAuthors());
            return bookRepository.save(existingBook);
        });
    }

    public boolean deleteBook(Integer id) {
        return bookRepository.findById(id).map(book -> {
            bookRepository.delete(book);
            return true;
        }).orElse(false);
    }

    public List<Book> searchBooksByTitle(String title) {
        return bookRepository.findByTitleContaining(title);
    }

    public List<Book> filterByLanguage(String language) {
        return bookRepository.findByLanguage(language);
    }

    public List<Book> filterByFormat(String format) {
        return bookRepository.findByFormat(format);
    }

    public List<Book> filterByYear(Integer year) {
        return bookRepository.findByYearPublished(year);
    }

    public Optional<Book> searchByIsbn(String isbn) {
        return bookRepository.findByIsbn(isbn).stream().findFirst();
    }

    public List<Book> filterByPublisher(Integer publisherID) {
        return bookRepository.findByPublisher_PublisherID(publisherID);
    }
}
