import { Card, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
    <Card className="bg-content1">
      <CardBody className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <p className="text-xl mb-8">Discover amazing products at great prices</p>
        <Link to="/shop" className="cursor-pointer touch-action-manipulation">
          <Button 
            color="primary"
            size="lg"
            className="min-h-[44px] px-6" // Added minimum height and horizontal padding
          >
            Start Shopping
          </Button>
        </Link>
      </CardBody>
    </Card>
  </div>
  );
}