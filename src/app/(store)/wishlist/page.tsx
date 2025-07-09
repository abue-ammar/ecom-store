"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

// Mock wishlist data
const mockWishlistItems = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 149.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    inStock: true,
    category: "Electronics",
    addedDate: "2025-01-05",
  },
  {
    id: 2,
    title: "Ergonomic Office Chair",
    price: 299.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    inStock: true,
    category: "Furniture",
    addedDate: "2025-01-03",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 199.99,
    originalPrice: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    inStock: false,
    category: "Electronics",
    addedDate: "2025-01-01",
  },
];

export default function WishlistPage() {
  const handleRemoveFromWishlist = (id: number, title: string) => {
    toast.success(`${title} removed from wishlist`);
  };

  const handleAddToCart = (item: (typeof mockWishlistItems)[0]) => {
    if (!item.inStock) {
      toast.error("Item is currently out of stock");
      return;
    }
    toast.success(`${item.title} added to cart!`);
  };

  const handleMoveAllToCart = () => {
    const inStockItems = mockWishlistItems.filter((item) => item.inStock);
    if (inStockItems.length === 0) {
      toast.error("No items in stock to add to cart");
      return;
    }
    toast.success(`${inStockItems.length} items added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground">
            {mockWishlistItems.length} items saved for later
          </p>
        </div>
        {mockWishlistItems.length > 0 && (
          <Button onClick={handleMoveAllToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add All to Cart
          </Button>
        )}
      </div>

      {mockWishlistItems.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-16">
            <Heart className="text-muted-foreground mb-4 h-16 w-16" />
            <h3 className="mb-2 text-xl font-semibold">
              Your wishlist is empty
            </h3>
            <p className="text-muted-foreground mb-6 text-center">
              Save items you love to your wishlist. They&apos;ll appear here so
              you can easily find them later.
            </p>
            <Link href="/">
              <Button>Start Shopping</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockWishlistItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 bg-white/80 hover:bg-white"
                    onClick={() =>
                      handleRemoveFromWishlist(item.id, item.title)
                    }
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
                {!item.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-medium text-white">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="line-clamp-2 font-semibold">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-lg font-bold">
                      ${item.price.toFixed(2)}
                    </span>
                    {item.originalPrice > item.price && (
                      <span className="text-muted-foreground text-sm line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs">
                    Added {new Date(item.addedDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <Button
                    className="w-full"
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {item.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Link href={`/products/${item.id}`}>
                    <Button variant="outline" className="w-full" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Recommendations */}
      {mockWishlistItems.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>You might also like</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-8 text-center">
              <p className="text-muted-foreground mb-4">
                Based on your wishlist, we think you&apos;ll love these items
              </p>
              <Link href="/">
                <Button variant="outline">Browse Recommendations</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
