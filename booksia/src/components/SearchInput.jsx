import { Input } from "@/components/ui/input"

export default function SearchInput() {
    return (
        <div className="flex items-center w-full max-w-md space-x-2 rounded-full border-2 border-black  px-3.5 py-2">
            <Input type="search" placeholder="Search your next read"
                   className="w-full border-0 h-6 shadow-none text-black font-semibold focus-visible:outline-none"/>
            <SearchIcon className="h-4 w-4"/>
        </div>
    )
}

function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
             stroke="currentColor" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
        </svg>
    )
}
