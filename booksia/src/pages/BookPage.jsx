import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import Footer from "@/components/Footer.jsx";
import {Button} from "@/components/ui/button.tsx";
import RatingCard from "@/components/RatingCard.jsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export default function BookPage({ book }) {
    return (
        <>
            <Navbar />
            <div className="h-screen">
                <SearchBar />
                <div className="flex flex-col lg:flex-row items-center lg:items-start px-16 sm:px-20 md:px-32 md:space-x-4 pb-4">
                    <img
                        src={book.coverUrl}
                        alt="Book Cover"
                        className="max-w-full md:max-w-[80%] max-h-96 w-auto rounded-lg shadow-accent"
                    />

                    <div className="mt-4 md:mt-0 md:pl-10 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                            <div className="text-lg text-gray-600 mb-4">by {book.author}</div>
                            <div className="text-gray-700">
                                {book.description}
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-lg font-semibold">{book.price}</div>
                            <Button>Add to cart</Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start px-10 sm:px-20 md:px-32 md:gap-10 md:space-x-4 py-4">
                    <div className="mt-4 text-sm text-gray-700">
                        <p className="text-xl mb-2">Book Details</p>
                        {Object.entries(book.details).map(([key, value]) => (
                            <p key={key}>{key}: {value}</p>
                        ))}
                    </div>

                    <Carousel className="w-2/3 md:w-full mt-4 md:px-4">
                        <CarouselContent>
                            {book.reviews.map((review, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                                    <RatingCard review={review} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="px-2" />
                        <CarouselNext className="px-2" />
                    </Carousel>
                </div>
                <Footer />
            </div>
        </>
    );
}
