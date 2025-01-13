import Navbar from "@/components/Navbar.jsx";
import SearchBar from "@/components/SearchBar.jsx";
import Footer from "@/components/Footer.jsx";
import {Button} from "@/components/ui/button.tsx";
import RatingCard from "@/components/RatingCard.jsx";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";

export default function BookPage() {
    return (
        <>
            <Navbar/>
            <div className="h-screen">
                <SearchBar/>
                <div
                    className="flex flex-col lg:flex-row items-center lg:items-start px-16 sm:px-20 md:px-32 md:space-x-4 pb-4">
                    <img
                        src="src/assets/ex.jpg"
                        alt="Book Cover"
                        className="max-w-full md:max-w-[80%] max-h-96 w-auto rounded-lg shadow-accent"
                    />

                    <div className="mt-4 md:mt-0 md:pl-10 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">Book Title</h2>
                            <div className="text-lg text-gray-600 mb-4">by Author</div>
                            <div className="text-gray-700">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley of type and scrambled it to make a type specimen book. It has survived not only
                                five
                                centuries, but also the leap into electronic typesetting, remaining essentially
                                unchanged.
                                It was
                                popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                passages,
                                and more recently with desktop publishing software like Aldus PageMaker including
                                versions
                                of Lorem Ipsum.
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <div className="text-lg font-semibold">35.5 LEI</div>
                            <Button>Add to cart</Button>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col lg:flex-row items-center lg:items-start px-10 sm:px-20 md:px-32 md:gap-10 md:space-x-4 py-4">
                    <div className="mt-4 text-sm text-gray-700">
                        <p className="text-xl mb-2">Book Details</p>
                        <p>Delivery time: 3-5 business days</p>
                        <p>Categorii: Young adult</p>
                        <p>Varsta recomandata: 14-16 ani</p>
                        <p>Limba: Engleza</p>
                        <p>Data publicarii: 2023</p>
                        <p>Editura: Bloomsbury</p>
                        <p>Tip coperta: Paperback</p>
                        <p>Nr. pagini: 352</p>
                        <p>ISBN: 9781526648549</p>
                        <p>Dimensiuni: l: 13cm | H: 20cm | 315g</p>
                    </div>

                    <Carousel className="w-2/3 md:w-full mt-4 md:px-4">
                        <CarouselContent>
                            <CarouselItem
                                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"><RatingCard/></CarouselItem>
                            <CarouselItem
                                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"><RatingCard/></CarouselItem>
                            <CarouselItem
                                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"><RatingCard/></CarouselItem>
                            <CarouselItem
                                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"><RatingCard/></CarouselItem>
                            <CarouselItem
                                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"><RatingCard/></CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className="px-2"/>
                        <CarouselNext className="px-2"/>
                    </Carousel>
                </div>
                <Footer/>
            </div>
        </>
    );
}

