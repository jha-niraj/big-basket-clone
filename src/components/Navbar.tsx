"use client"

import * as React from "react"
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import logo from "../assets/images/logo.png";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contactus" },
]

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
                    <a
                        href="/"
                        className="flex items-center space-x-2"
                        onClick={(e) => {
                            e.preventDefault()
                            handleNavigation("/")
                        }}
                    >
                        <img 
                            src={logo}
                            alt="Mian Logo"
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                        <span className="font-bold text-2xl bg-clip-text text-black dark:text-white">
                            BootStrap
                        </span>
                    </a>

                    <div className="hidden md:flex space-x-1 items-center bg-muted/50 backdrop-blur-sm rounded-full px-2 py-1">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                variant="ghost"
                                className={`text-sm font-medium transition-colors hover:text-primary rounded-full ${activePath === item.href
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted"
                                    }`}
                                onClick={() => handleNavigation(item.href)}
                            >
                                {item.name}
                            </Button>
                        ))}
                        <ModeToggle />
                    </div>
                    
                    <Link to="/joinus">
                        <Button
                            className="hidden md:inline-flex hover:from-primary-foreground hover:to-primary text-primary-foreground"
                        >
                            Join Now
                        </Button>
                    </Link>

                    <div className="md:hidden flex items-center space-x-4">
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
                                            Join Now
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}