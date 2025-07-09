import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Home, Package } from "lucide-react";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  // Generate a random order number for demo
  const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <CheckCircle className="h-24 w-24 mx-auto text-green-500" />
          <h1 className="text-3xl font-bold text-green-700">
            Order Confirmed!
          </h1>
          <p className="text-lg text-muted-foreground">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Package className="h-5 w-5 mr-2" />
              Order Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-medium mb-1">Order Number</p>
              <p className="text-2xl font-bold">{orderNumber}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1">Estimated Delivery</p>
                <p className="text-muted-foreground">
                  {new Date(
                    Date.now() + 7 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Order Status</p>
                <p className="text-green-600">Processing</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-1">
              <p>📧 A confirmation email has been sent to your email address</p>
              <p>
                📦 You&apos;ll receive tracking information once your order
                ships
              </p>
              <p>💬 Questions? Contact our support team anytime</p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/">
              <Button variant="outline" className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Link href="/orders" className="w-full">
              <Button className="w-full">
                <Package className="h-4 w-4 mr-2" />
                Track Your Order
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
