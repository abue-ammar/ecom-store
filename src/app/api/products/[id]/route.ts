import { NextResponse } from "next/server";
import { Product } from "../route";

// This would normally come from a database
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    description:
      "Experience premium audio quality with these wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding. Perfect for music lovers, professionals, and travelers who demand the best in audio technology.",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    description:
      "Advanced fitness tracking with heart rate monitor, GPS, sleep tracking, and 7-day battery life. Water-resistant design perfect for swimming and intense workouts. Includes fitness coaching and health insights.",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    description:
      "Comfortable organic cotton t-shirt made from sustainably sourced materials. Available in multiple colors and sizes. Soft, breathable fabric perfect for everyday wear.",
    category: "Clothing",
  },
  {
    id: 4,
    title: "Professional Camera Lens",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
    description:
      "High-performance camera lens for professional photography with ultra-sharp optics, weather sealing, and fast autofocus. Perfect for portraits, landscapes, and professional shoots.",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    description:
      "Stylish and functional backpack for everyday use with laptop compartment, multiple pockets, and water-resistant material. Perfect for work, travel, or daily commuting.",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    description:
      "Ergonomic wireless mouse with long battery life, precision tracking, and comfortable grip. Perfect for office work, gaming, and creative projects.",
    category: "Electronics",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const product = dummyProducts.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
