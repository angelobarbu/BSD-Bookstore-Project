import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import React from "react";
import Navbar from "@/components/Navbar.jsx";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <Navbar></Navbar>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider>
    )
}
