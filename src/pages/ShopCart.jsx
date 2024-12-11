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
          <Card key={item.id} className="bg-content1 hover:shadow-lg transition-shadow">
            <CardBody className="p-4 md:p-6">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-12 gap-6 items-center">
                <div className="col-span-2">
                  <div className="bg-content2 rounded-lg p-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                </div>
                <div className="col-span-5">
                  <h2 className="font-semibold text-lg line-clamp-1">{item.title}</h2>
                  <p className="text-default-500 text-lg mt-2">${item.price}</p>
                </div>
                <div className="col-span-3 flex justify-center">
                  <div className="flex items-center gap-3 bg-content2 rounded-lg px-4 py-2">
                    <Button
                      size="md"
                      variant="light"
                      isIconOnly
                      onClick={() => updateQuantity(item.id, item.amount - 1)}
                      className="text-lg font-bold"
                    >
                      −
                    </Button>
                    <span className="w-12 text-center text-lg font-medium">{item.amount}</span>
                    <Button
                      size="md"
                      variant="light"
                      isIconOnly
                      onClick={() => updateQuantity(item.id, item.amount + 1)}
                      className="text-lg font-bold"
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="col-span-2 flex justify-end">
                  <Button
                    size="md"
                    color="danger"
                    variant="flat"
                    onClick={() => removeItem(item.id)}
                    className="px-6"
                  >
                    Remove
                  </Button>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4">
                  <div className="bg-content2 rounded-lg p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <h2 className="font-semibold text-lg line-clamp-2">{item.title}</h2>
                    <p className="text-default-500 text-lg mt-2">${item.price}</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="flex justify-center">
                    <div className="inline-flex items-center gap-3 bg-content2 rounded-lg px-4 py-2">
                    <Button
          size="md"
          variant="light"
  isIconOnly
  onClick={() => updateQuantity(item.id, item.amount - 1)}
  onTouchStart={(e) => {
    e.preventDefault();
    updateQuantity(item.id, item.amount - 1);
  }}
  className="text-lg font-bold min-h-[44px] min-w-[44px]"
>
  −
</Button>
<span className="w-12 text-center text-lg font-medium">{item.amount}</span>
<Button
  size="md"
  variant="light"
  isIconOnly
  onClick={() => updateQuantity(item.id, item.amount + 1)}
  onTouchStart={(e) => {
    e.preventDefault();
    updateQuantity(item.id, item.amount + 1);
  }}
  className="text-lg font-bold min-h-[44px] min-w-[44px]"
>
  +
</Button>
</div>
</div>
<Button
  size="md"
  color="danger"
  variant="flat"
  onClick={() => removeItem(item.id)}
  onTouchStart={(e) => {
    e.preventDefault();
    removeItem(item.id);
  }}
  className="w-full min-h-[44px]"
>
  Remove
</Button>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-content1 hover:shadow-lg transition-shadow">
        <CardBody className="p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span className="text-xl">Total:</span>
              <span className="text-2xl font-bold">
                ${total.toFixed(2)}
              </span>
            </div>
            <Button
              color="primary"
              size="lg"
              className="w-full sm:w-auto min-w-40"
            >
              Checkout
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}