package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.BookInputDTO;
import psb.project.model.Book;
import psb.project.repository.BookRepository;
import psb.project.repository.PublisherRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final PublisherRepository publisherRepository;

    @Autowired
    public BookService(BookRepository bookRepository, PublisherRepository publisherRepository) {
        this.bookRepository = bookRepository;
        this.publisherRepository = publisherRepository;
    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Integer id) {
        return bookRepository.findById(id);
    }

    public Book addBook(BookInputDTO bookInputDTO) {
        Book book = mapToBookEntity(bookInputDTO);
        return bookRepository.save(book);
    }

    public Optional<Book> updateBook(Integer id, BookInputDTO bookInputDTO) {
        return bookRepository.findById(id).map(existingBook -> {
            existingBook.setTitle(bookInputDTO.title());
            existingBook.setPrice(bookInputDTO.price());
            existingBook.setDiscountPercentage(bookInputDTO.discountPercentage());
            existingBook.setYearPublished(bookInputDTO.yearPublished());
            existingBook.setLanguage(bookInputDTO.language());
            existingBook.setFormat(bookInputDTO.format());
            existingBook.setIsbn(bookInputDTO.isbn());
            existingBook.setStockQuantity(bookInputDTO.stockQuantity());
            existingBook.setDescription(bookInputDTO.description());
            existingBook.setCoverImageURL(bookInputDTO.coverImageURL());
            existingBook.setPublisher(
                    publisherRepository.findById(bookInputDTO.publisherID())
                            .orElseThrow(() -> new IllegalArgumentException("Invalid publisher ID"))
            );
            return bookRepository.save(existingBook);
        });
    }

    public boolean deleteBook(Integer id) {
        return bookRepository.findById(id).map(book -> {
            bookRepository.delete(book);
            return true;
        }).orElse(false);
    }

    private Book mapToBookEntity(BookInputDTO dto) {
        Book book = new Book();
        book.setTitle(dto.title());
        book.setPrice(dto.price());
        book.setDiscountPercentage(dto.discountPercentage());
        book.setYearPublished(dto.yearPublished());
        book.setLanguage(dto.language());
        book.setFormat(dto.format());
        book.setIsbn(dto.isbn());
        book.setStockQuantity(dto.stockQuantity());
        book.setDescription(dto.description());
        book.setCoverImageURL(dto.coverImageURL());
        book.setPublisher(
                publisherRepository.findById(dto.publisherID())
                        .orElseThrow(() -> new IllegalArgumentException("Invalid publisher ID"))
        );
        return book;
    }
}
