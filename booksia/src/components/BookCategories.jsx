import {Button} from "@/components/ui/button.tsx";

function BookCategories() {
    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button className="text-lg p-3 sm:p-5">Top Sales</Button>
            <Button className="text-lg p-3 sm:p-5">English Books</Button>
            <Button className="text-lg p-3 sm:p-5">Science</Button>
            <Button className="text-lg p-3 sm:p-5">Children</Button>
            <Button className="text-lg p-3 sm:p-5">History</Button>
            <Button className="text-lg p-3 sm:p-5">Biography</Button>
            <Button className="text-lg p-3 sm:p-5">Fiction</Button>
            <Button className="text-lg p-3 sm:p-5">Non-Fiction</Button>
        </div>
    );
}


export default BookCategories;