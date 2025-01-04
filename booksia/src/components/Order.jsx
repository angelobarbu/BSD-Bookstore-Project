import {Select, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import {SelectContent} from "@radix-ui/react-select";

export default function Order(){
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Order by"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="asc">Price Asc</SelectItem>
                <SelectItem value="desc">Lower Desc</SelectItem>
            </SelectContent>
        </Select>
    );
}