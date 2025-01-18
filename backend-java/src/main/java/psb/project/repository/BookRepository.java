package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import psb.project.model.Book;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findByTitleContaining(String title);
    List<Book> findByLanguage(String language);
    List<Book> findByFormat(String format);
    List<Book> findByYearPublished(Integer year);
    List<Book> findByPublisher_PublisherID(Integer publisherID);
    List<Book> findByIsbn(String isbn);
    List<Book> findByPriceBetween(Double minPrice, Double maxPrice);
    List<Book> findByGenre(String genre);
    List<Book> findByCollection(String collection);

    @Query("SELECT b FROM Book b JOIN b.authors a WHERE a.name LIKE %:authorName%")
    List<Book> findByAuthorName(@Param("authorName") String authorName);

    @Query("SELECT b FROM Book b WHERE b.stockQuantity > 0 AND b.deliveryTime = :deliveryTime")
    List<Book> findByDeliveryTime(@Param("deliveryTime") String deliveryTime);

    @Query("SELECT b FROM Book b WHERE " +
            "(SELECT AVG(r.rating) FROM Review r WHERE r.book.bookID = b.bookID) >= :minRating")
    List<Book> findByMinimumRating(@Param("minRating") Double minRating);

    @Query("SELECT b FROM Book b LEFT JOIN Review r ON r.book.bookID = b.bookID " +
            "GROUP BY b.bookID " +
            "ORDER BY AVG(r.rating) DESC")
    List<Book> findAllBooksOrderByRatingDesc();

}