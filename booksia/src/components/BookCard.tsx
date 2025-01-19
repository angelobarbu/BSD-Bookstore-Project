"use client";
import { cn } from "@/lib/utils";
import React, {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

export default function BookCard({ book }) {
  console.log(book); // Verify the object structure in the console

  return (
      <div className="flex flex-col items-center gap-2 h-full">
          <Card className="flex flex-col h-full">
              {/* Link to detailed book view */}
              <Link to={`/book/${book.bookID}`} className="flex flex-col h-full">
                  {/* Book Cover */}
                  <img
                      src={book.coverImageURL} // Use coverImageURL for the book cover
                      alt={`Cover of ${book.title}`} // Use title for the alt text
                      className="w-full h-auto rounded object-cover"
                  />
                  <div className="flex flex-col flex-grow justify-between">
                      {/* Book Title */}
                      <CardTitle>{book.title}</CardTitle>
                      {/* Display Publisher or Authors */}
                      <CardDescription className="text-sm text-gray-600">
                          {book.authors.length > 0
                              ? `by ${book.authors.join(", ")}`
                              : `Published by ${book.publisher.name}`}
                      </CardDescription>
                  </div>
              </Link>
              {/* Price and Bookmark */}
              <div className="flex items-center justify-between w-full py-1 mt-2">
                  <p className="text-lg font-semibold">{book.price} LEI</p>
                  <div onClick={(e) => e.stopPropagation()}>
                      <Bookmark />
                  </div>
              </div>
          </Card>
          {/* Add to Cart Button */}
          <Button className="my-2">Add to cart</Button>
      </div>
  );
}



export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-5 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-800 dark:text-white pt-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-lg font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

function Bookmark() {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
    };

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={isBookmarked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-7 cursor-pointer"
            onClick={toggleBookmark}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
        </svg>
    );
}