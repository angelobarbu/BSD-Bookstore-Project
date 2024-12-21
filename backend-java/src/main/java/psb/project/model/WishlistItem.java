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

    public Integer getWishlistItemID() {
        return wishlistItemID;
    }

    public void setWishlistItemID(Integer wishlistItemID) {
        this.wishlistItemID = wishlistItemID;
    }

    public Wishlist getWishlist() {
        return wishlist;
    }

    public void setWishlist(Wishlist wishlist) {
        this.wishlist = wishlist;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }
}
