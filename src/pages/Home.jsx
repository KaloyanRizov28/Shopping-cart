import { Card, CardBody, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleShopClick = (e) => {
    
    e.preventDefault();
    e.stopPropagation();

    
    setTimeout(() => {
      navigate('/shop');
    }, 50);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="bg-content1">
        <CardBody className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-xl mb-8">Discover amazing products at great prices</p>
          <div className="touch-action-manipulation">
            <Button 
              color="primary"
              size="lg"
              className="min-h-[44px] px-6"
              onClick={handleShopClick}
              onTouchStart={handleShopClick}
              onTouchEnd={(e) => e.preventDefault()}
            >
              Start Shopping
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}