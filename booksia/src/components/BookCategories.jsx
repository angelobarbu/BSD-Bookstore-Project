import { Button } from "@/components/ui/button.tsx";

function BookCategories({ onCategorySelect }) {
    const categories = [
        "All",
        "Top Sales",
        "Modern Library",
        "Science",
        "Children",
        "History",
        "Biography",
        "Fiction",
        "Non-Fiction",
    ];

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            {categories.map((category) => (
                <Button
                    key={category}
                    className="text-lg p-3 sm:p-5"
                    onClick={() => onCategorySelect(category)}
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}

export default BookCategories;
