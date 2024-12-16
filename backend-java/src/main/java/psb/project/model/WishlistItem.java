package psb.project.model;

import jakarta.persistence.*;

@Entity
public class WishlistItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer wishlistItemID;

    @ManyToOne
    @JoinColumn(name = "wishlistID")
    private Wishlist wishlist;

    @ManyToOne
    @JoinColumn(name = "bookID")
    private Book book;
}
