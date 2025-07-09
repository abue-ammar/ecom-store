"use client";

import { Product } from "@/app/api/products/route";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="relative block aspect-square h-full w-full">
      <Link href={`/products/${product.id}`}>
        <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          />

          {/* Bottom overlay with product info */}
          <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
            <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                {product.title}
              </h3>
              <p className="flex-none rounded-full bg-black p-2 text-white dark:bg-white dark:text-black">
                ${product.price.toFixed(2)}
                <span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>

          {/* Category badge in top corner */}
          {product.category && (
            <Badge
              className="absolute top-2 left-2 border-neutral-200 bg-white/70 text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"
              variant="secondary"
            >
              {product.category}
            </Badge>
          )}

          {/* Add to cart button - appears on hover */}
          <div className="absolute top-2 right-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleAddToCart();
              }}
              size={"icon"}
              className="rounded-full bg-black text-white shadow-lg hover:bg-gray-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
