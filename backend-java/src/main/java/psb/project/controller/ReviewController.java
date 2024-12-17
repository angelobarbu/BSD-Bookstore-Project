package psb.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import psb.project.model.Review;
import psb.project.service.ReviewService;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping
    public ResponseEntity<Review> submitReview(@RequestBody Review review) {
        return ResponseEntity.ok(reviewService.submitReview(review));
    }

    @PutMapping("/{reviewID}")
    public ResponseEntity<Review> updateReview(@PathVariable Integer reviewID, @RequestBody Review updatedReview) {
        return reviewService.updateReview(reviewID, updatedReview)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{reviewID}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer reviewID) {
        boolean isDeleted = reviewService.deleteReview(reviewID);
        return isDeleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    @GetMapping("/book/{bookID}")
    public ResponseEntity<List<Review>> getReviewsByBook(@PathVariable Integer bookID) {
        return ResponseEntity.ok(reviewService.getReviewsByBookID(bookID));
    }
}
