"use client";

import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { isAdmin, login, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl font-bold">EcomStore</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-4 w-4" />
          </Button>

          {isAdmin ? (
            <div className="flex items-center space-x-2">
              <Link href="/admin/products">
                <Button variant="outline" size="sm">
                  Admin Panel
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={login}
              title="Login as Admin"
            >
              <User className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
