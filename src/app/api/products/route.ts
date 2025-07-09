import { NextResponse } from "next/server";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

// Dummy products data
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
    description: "Advanced fitness tracking with heart rate monitor",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&crop=center",
    description: "Comfortable organic cotton t-shirt in various colors",
    category: "Clothing",
  },
  {
    id: 4,
    title: "Professional Camera Lens",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop&crop=center",
    description: "High-performance camera lens for professional photography",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
    description: "Stylish and functional backpack for everyday use",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&crop=center",
    description: "Ergonomic wireless mouse with long battery life",
    category: "Electronics",
  },
];

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json(dummyProducts);
}

export async function POST(request: Request) {
  const body = await request.json();

  // Generate new ID
  const newId = Math.max(...dummyProducts.map((p) => p.id)) + 1;

  const newProduct: Product = {
    id: newId,
    title: body.title,
    price: parseFloat(body.price),
    image:
      body.image ||
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center",
    description: body.description,
    category: body.category,
  };

  // In a real app, you'd save to database
  dummyProducts.push(newProduct);

  return NextResponse.json(newProduct, { status: 201 });
}
