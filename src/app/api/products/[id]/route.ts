import { NextResponse } from "next/server";
import { Product } from "../route";

// This would normally come from a database
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1748189517364-cda16989c1c6?w=400&h=400&fit=crop&crop=center",
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1634466511686-a978c60a4965?w=400&h=400&fit=crop&crop=center",
    description: "Advanced fitness tracking with heart rate monitor",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1713881842156-3d9ef36418cc??w=400&h=400&fit=crop&crop=center",
    description: "Comfortable organic cotton t-shirt in various colors",
    category: "Clothing",
  },
  {
    id: 4,
    title: "Professional Camera Lens",
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1640043889043-c23117b70692?w=400&h=400&fit=crop&crop=center",
    description: "High-performance camera lens for professional photography",
    category: "Electronics",
  },
  {
    id: 5,
    title: "Minimalist Backpack",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1551677399-f38a96cd1bc7?w=400&h=400&fit=crop&crop=center",
    description: "Stylish and functional backpack for everyday use",
    category: "Accessories",
  },
  {
    id: 6,
    title: "Wireless Mouse",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop&crop=center",
    description: "Ergonomic wireless mouse with long battery life",
    category: "Electronics",
  },
  {
    id: 7,
    title: "Ceramic Coffee Mug",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1614833193447-427b75eee2f0?w=400&h=400&fit=crop&crop=center",
    description: "Handcrafted ceramic mug for your daily brew",
    category: "Home & Kitchen",
  },
  {
    id: 8,
    title: "Leather Wallet",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1612023395494-1c4050b68647?w=400&h=400&fit=crop&crop=center",
    description: "Premium leather wallet with multiple compartments",
    category: "Accessories",
  },
  {
    id: 9,
    title: "Bluetooth Speaker",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1621266034770-74d35534f9ae?w=400&h=400&fit=crop&crop=center",
    description: "Compact Bluetooth speaker with powerful sound",
    category: "Electronics",
  },
  {
    id: 10,
    title: "Standing Desk",
    price: 499.99,
    image:
      "https://images.unsplash.com/photo-1622126756000-9fb7f6ed9f06?w=400&h=400&fit=crop&crop=center",
    description: "Adjustable standing desk for ergonomic work setups",
    category: "Furniture",
  },
  {
    id: 11,
    title: "Scented Candle Set",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1649344164842-3196fd796ac0?w=400&h=400&fit=crop&crop=center",
    description: "Aromatic soy candles in calming scents",
    category: "Home & Kitchen",
  },
  {
    id: 12,
    title: "Running Shoes",
    price: 109.99,
    image:
      "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=400&h=400&fit=crop&crop=center",
    description: "Lightweight running shoes for daily workouts",
    category: "Footwear",
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
