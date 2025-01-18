package psb.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
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
}

