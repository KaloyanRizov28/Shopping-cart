import { Link } from 'react-router-dom';
import { Button, Badge } from "@nextui-org/react";

export default function Navbar({ cartCount }) {
  return (
    <nav className="border-b border-divider bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className="text-2xl font-bold text-foreground touch-action-manipulation min-h-[44px] flex items-center"
              onTouchStart={(e) => e.stopPropagation()}
            >
              Shop
            </Link>
            <Link 
              to="/shop" 
              className="text-foreground-500 hover:text-foreground transition-colors touch-action-manipulation min-h-[44px] flex items-center"
              onTouchStart={(e) => e.stopPropagation()}
            >
              Products
            </Link>
          </div>
          <Link 
  to="/cart" 
  className="touch-action-manipulation"
>
  <Button
    variant="flat"
    className="bg-default-100 min-h-[44px]"
    onTouchStart={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
    onTouchEnd={(e) => {
      e.preventDefault();
      window.location.href = '/cart';
    }}
    startContent={
      <Badge 
        content={cartCount} 
        color="primary"
        size="sm"
        className="transform translate-x-2 -translate-y-2"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </Badge>
    }
  >
    Cart
  </Button>
</Link>
        </div>
      </div>
    </nav>
  );
}