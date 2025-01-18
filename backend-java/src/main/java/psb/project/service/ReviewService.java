package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.dto.ReviewInputDTO;
import psb.project.model.Book;
import psb.project.model.Review;
import psb.project.model.User;
import psb.project.repository.BookRepository;
import psb.project.repository.ReviewRepository;
import psb.project.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final BookRepository bookRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository, UserRepository userRepository, BookRepository bookRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.bookRepository = bookRepository;
    }

    public Review submitReview(ReviewInputDTO reviewInputDTO) {
        User user = userRepository.findById(reviewInputDTO.userID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid user ID"));
        Book book = bookRepository.findById(reviewInputDTO.bookID())
                .orElseThrow(() -> new IllegalArgumentException("Invalid book ID"));

        Review review = new Review();
        review.setUser(user);
        review.setBook(book);
        review.setRating(reviewInputDTO.rating());
        review.setComment(reviewInputDTO.comment());
        return reviewRepository.save(review);
    }

    public Optional<Review> updateReview(Integer reviewID, Review updatedReview) {
        return reviewRepository.findById(reviewID).map(existingReview -> {
            existingReview.setRating(updatedReview.getRating());
            existingReview.setComment(updatedReview.getComment());
            return reviewRepository.save(existingReview);
        });
    }

    public boolean deleteReview(Integer reviewID) {
        return reviewRepository.findById(reviewID).map(review -> {
            reviewRepository.delete(review);
            return true;
        }).orElse(false);
    }

    public List<Review> getReviewsByBookID(Integer bookID) {
        return reviewRepository.findByBook_BookID(bookID);
    }
}


