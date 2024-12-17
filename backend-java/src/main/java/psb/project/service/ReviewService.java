package psb.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import psb.project.model.Review;
import psb.project.repository.ReviewRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public Review submitReview(Review review) {
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

