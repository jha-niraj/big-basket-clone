"use client"

import * as React from "react"
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contactus" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activePath, setActivePath] = React.useState("/")
    const navigate = useNavigate()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavigation = (href: string) => {
        setActivePath(href)
        navigate(href)
    }

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-lg"
                : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center justify-start gap-2">
                        <a
                            href="/"
                            className="flex items-center space-x-2"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation("/");
                            }}
                        >
                            <span className="font-bold text-2xl bg-clip-text text-black dark:text-white">
                                BigBasket
                            </span>
                        </a>
                        <Input
                            type="text"
                            placeholder="Search for your product..."
                            className="max-w-72 hidden sm:flex"
                        />
                    </div>
                    <div className="hidden lg:flex space-x-1 items-center justify-center gap-3 backdrop-blur-sm rounded-full">
                        <div className="flex gap-2">
                            <div>
                                {
                                    navItems.map((item) => (
                                        <Button
                                            key={item.name}
                                            variant="ghost"
                                            className={`text-sm font-medium transition-colors p-4 hover:text-primary rounded-full ${activePath === item.href
                                                ? "bg-green-400 text-black"
                                                : "text-muted-foreground hover:bg-muted"
                                                }`}
                                            onClick={() => handleNavigation(item.href)}
                                        >
                                            {item.name}
                                        </Button>
                                    ))
                                }
                            </div>
                            <ModeToggle />
                        </div>
                        <Link to="/signin" className="flex items-center justify-center">
                            <Button
                                className="hidden md:inline-flex hover:from-primary-foreground hover:to-primary text-primary-foreground"
                            >
                                Sign In
                            </Button>
                        </Link>
                    </div>
                    <div className="lg:hidden flex items-center space-x-1">
                        <ModeToggle />
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4 w-full">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.name}
                                            variant="ghost"
                                            className={`justify-start ${activePath === item.href ? "text-primary" : "text-muted-foreground"
                                                }`}
                                            onClick={() => {
                                                handleNavigation(item.href)
                                            }}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                    <Link to="/joinus" className="w-full">
                                        <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:from-primary-foreground hover:to-primary text-primary-foreground">
                                            Sign In
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
            <Input
                type="text"
                placeholder="Search your products..."
                className="flex sm:hidden items-center justify-center w-[90%] mx-auto"
            />
        </header>
    )
}