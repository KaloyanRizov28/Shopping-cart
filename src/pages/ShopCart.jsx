import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from '@nextui-org/react';

export default function ShopCart({ boughtItems = [], updateQuantity, removeItem }) {
  if (!Array.isArray(boughtItems) || boughtItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-content1">
          <CardBody className="text-center py-8">
            <p className="text-xl mb-4">Your cart is empty</p>
            <Link to="/shop">
              <Button 
                color="primary"
                className="mt-2"
              >
                Continue Shopping
              </Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  }

  const total = boughtItems.reduce((sum, item) => sum + (item.price * item.amount), 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {boughtItems.map(item => (
          <Card key={item.id} className="bg-content1">
            <CardBody>
              <div className="flex items-center gap-4">
                <div className="bg-content2 rounded-lg p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="font-semibold line-clamp-1">{item.title}</h2>
                  <p className="text-default-500 mt-1">${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="flat"
                    onClick={() => updateQuantity(item.id, item.amount - 1)}
                  >
                    −
                  </Button>
                  <span className="w-8 text-center">{item.amount}</span>
                  <Button
                    size="sm"
                    variant="flat"
                    onClick={() => updateQuantity(item.id, item.amount + 1)}
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    variant="flat"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-content1">
        <CardBody>
          <div className="flex justify-between items-center">
            <span className="text-xl">Total</span>
            <span className="text-2xl font-bold">
              ${total.toFixed(2)}
            </span>
          </div>
          <Button 
            color="primary"
            size="lg"
            className="w-full mt-4"
          >
            Checkout
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

