import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListDialog } from "@/components/ListDialog.jsx";

export function Wishlist() {
    const [openDialog, setOpenDialog] = useState(false);

    return (
        <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button className="text-lg p-3 sm:p-5">Wishlist 1</Button>
            <Button className="text-lg p-3 sm:p-5">Wishlist 2</Button>
            <Button className="text-lg p-3 sm:p-5">Wishlist 3</Button>
            <ListDialog />
        </div>
    );
}