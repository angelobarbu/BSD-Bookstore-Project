package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.BookFilterInputDTO;
import psb.project.dto.BookInputDTO;
import psb.project.model.Book;
import psb.project.repository.BookRepository;
import psb.project.repository.PublisherRepository;

import java.util.ArrayList;
import java.util.Comparator;
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
            existingBook.setGenre(bookInputDTO.genre());
            existingBook.setCollection(bookInputDTO.collection());
            existingBook.setDeliveryTime(bookInputDTO.deliveryTime());
            existingBook.setNumberOfPages(bookInputDTO.numberOfPages());
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
        book.setGenre(dto.genre());
        book.setCollection(dto.collection());
        book.setDeliveryTime(dto.deliveryTime());
        book.setNumberOfPages(dto.numberOfPages());
        return book;
    }

    public List<Book> filterBooksByCriteria(BookFilterInputDTO filterInputDTO) {

        List<Book> filteredBooks = new ArrayList<>(bookRepository.findAll());

        if (filterInputDTO.genres() != null && !filterInputDTO.genres().isEmpty()) {
            List<Book> genreFiltered = new ArrayList<>();
            for (String genre : filterInputDTO.genres()) {
                genreFiltered.addAll(bookRepository.findByGenre(genre));
            }
            filteredBooks.retainAll(genreFiltered);
        }

        if (filterInputDTO.languages() != null && !filterInputDTO.languages().isEmpty()) {
            List<Book> languageFiltered = new ArrayList<>();
            for (String language : filterInputDTO.languages()) {
                languageFiltered.addAll(bookRepository.findByLanguage(language));
            }
            filteredBooks.retainAll(languageFiltered);
        }

        if (filterInputDTO.formats() != null && !filterInputDTO.formats() .isEmpty()) {
            List<Book> formatFiltered = new ArrayList<>();
            for (String format : filterInputDTO.formats() ) {
                formatFiltered.addAll(bookRepository.findByFormat(format));
            }
            filteredBooks.retainAll(formatFiltered);
        }

        if (filterInputDTO.years() != null && !filterInputDTO.years().isEmpty()) {
            List<Book> yearFiltered = new ArrayList<>();
            for (Integer year : filterInputDTO.years()) {
                yearFiltered.addAll(bookRepository.findByYearPublished(year));
            }
            filteredBooks.retainAll(yearFiltered);
        }

        if (filterInputDTO.publisherIDs() != null && !filterInputDTO.publisherIDs().isEmpty()) {
            List<Book> publisherFiltered = new ArrayList<>();
            for (Integer publisherID : filterInputDTO.publisherIDs()) {
                publisherFiltered.addAll(bookRepository.findByPublisher_PublisherID(publisherID));
            }
            filteredBooks.retainAll(publisherFiltered);
        }

        if (filterInputDTO.minPrice() != null || filterInputDTO.maxPrice() != null) {
            filteredBooks.retainAll(bookRepository.findByPriceBetween(
                    filterInputDTO.minPrice() != null ? filterInputDTO.minPrice() : 0.0,
                    filterInputDTO.maxPrice() != null ? filterInputDTO.maxPrice() : 10000.0));
        }

        if (filterInputDTO.collections() != null && !filterInputDTO.collections().isEmpty()) {
            List<Book> collectionFiltered = new ArrayList<>();
            for (String collection : filterInputDTO.collections()) {
                collectionFiltered.addAll(bookRepository.findByCollection(collection));
            }
            filteredBooks.retainAll(collectionFiltered);
        }

        if (filterInputDTO.authorNames() != null && !filterInputDTO.authorNames().isEmpty()) {
            List<Book> authorFiltered = new ArrayList<>();
            for (String authorName : filterInputDTO.authorNames()) {
                authorFiltered.addAll(bookRepository.findByAuthorName(authorName));
            }
            filteredBooks.retainAll(authorFiltered);
        }

        if (filterInputDTO.deliveryTimes() != null && !filterInputDTO.deliveryTimes().isEmpty()) {
            List<Book> deliveryFiltered = new ArrayList<>();
            for (String deliveryTime : filterInputDTO.deliveryTimes()) {
                deliveryFiltered.addAll(bookRepository.findByDeliveryTime(deliveryTime));
            }
            filteredBooks.retainAll(deliveryFiltered);
        }

        if (filterInputDTO.minRating() != null) {
            filteredBooks.retainAll(bookRepository.findByMinimumRating(filterInputDTO.minRating()));
        }
        return filteredBooks;
    }
    public List<Book> sortBooks(List<Book> books,String sortBy) {

        switch (sortBy.toUpperCase()) {
            case "PRICE_LOW_TO_HIGH":
                books.sort(Comparator.comparing(Book::getPrice));
                return books;
            case "PRICE_HIGH_TO_LOW":
                books.sort(Comparator.comparing(Book::getPrice).reversed());
                return books;
            case "RATING_HIGH_TO_LOW":
                books = bookRepository.findAllBooksOrderByRatingDesc();
                return books;
            case "NEWEST":
                books.sort(Comparator.comparing(Book::getYearPublished).reversed());
                return books;
            case "OLDEST":
                books.sort(Comparator.comparing(Book::getYearPublished));
                return books;
            case "ALPHABETICAL_A_TO_Z":
                books.sort(Comparator.comparing(Book::getTitle));
                return books;
            case "ALPHABETICAL_Z_TO_A":
                books.sort(Comparator.comparing(Book::getTitle).reversed());
                return books;
            case "RELEVANCE":
            default:
                return books;
        }
    }

    public List<Book> filterAndSortBooks(BookFilterInputDTO bookFilterInputDTO, String sortBy) {
        List<Book> filteredBooks = filterBooksByCriteria(bookFilterInputDTO);
        return sortBooks(filteredBooks, sortBy);
    }
}
