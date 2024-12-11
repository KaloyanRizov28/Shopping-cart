import { useNavigate } from 'react-router-dom';
import { Card, CardBody, Button, Badge } from "@nextui-org/react";

export default function Navbar({ cartCount }) {
 const navigate = useNavigate();

 const handleNavigation = (path, e) => {
   e.preventDefault();
   e.stopPropagation();
   navigate(path);
 };

 return (
   <nav className="sticky top-0 z-50 border-b border-divider bg-background">
     <div className="container mx-auto px-4">
       <div className="flex justify-between items-center h-16">
         <div className="flex items-center gap-8">
           {/* Home Link */}
           <Button
             className="text-2xl font-bold text-foreground min-h-[44px] bg-transparent p-0"
             onClick={(e) => handleNavigation('/', e)}
             onTouchStart={(e) => handleNavigation('/', e)}
           >
             Shop
           </Button>

           {/* Products Link */}
           <Button
             className="text-foreground-500 hover:text-foreground transition-colors min-h-[44px] bg-transparent p-0"
             onClick={(e) => handleNavigation('/shop', e)}
             onTouchStart={(e) => handleNavigation('/shop', e)}
           >
             Products
           </Button>
         </div>

         {/* Cart Button */}
         <Button
           variant="flat"
           className="bg-default-100 min-h-[44px]"
           onClick={(e) => handleNavigation('/cart', e)}
           onTouchStart={(e) => handleNavigation('/cart', e)}
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
                 <path 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                   strokeWidth={2} 
                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                 />
               </svg>
             </Badge>
           }
         >
           Cart
         </Button>
       </div>
     </div>
   </nav>
 );
}