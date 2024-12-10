// pages/Shop.jsx
import { useState, useEffect } from "react";
import { Card, CardBody, CardFooter, Button, Tabs, Tab } from '@nextui-org/react';

export default function Shop({ listOfItems, setListOfItems, handleBuyClick }) {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategories(["all", ...data]);
      });
  }, []);

  // Fetch products
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setListOfItems(data);
        setFilteredItems(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [setListOfItems]);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(listOfItems);
    } else {
      setFilteredItems(listOfItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, listOfItems]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div>
    <h1 className="text-3xl font-bold mb-8">Products</h1>
    
    <Tabs 
      selectedKey={selectedCategory}
      onSelectionChange={setSelectedCategory}
      color="primary"
      variant="bordered"
      className="mb-8"
    >
      {categories.map((category) => (
        <Tab 
          key={category} 
          title={category.charAt(0).toUpperCase() + category.slice(1)}
        />
      ))}
    </Tabs>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map(product => (
        <Card
          key={product.id}
          className="bg-content1"
        >
          <CardBody className="p-4">
            <div className="bg-content2 rounded-lg p-4 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain"
              />
            </div>
            <div className="mb-2">
              <span className="text-xs text-default-500 uppercase tracking-wide">
                {product.category}
              </span>
            </div>
            <h2 className="text-lg font-semibold line-clamp-1">
              {product.title}
            </h2>
            <p className="text-sm text-default-500 line-clamp-2 mt-2">
              {product.description}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                <span className="text-warning">★</span>
                <span className="text-default-500 text-sm ml-1">
                  {product.rating?.rate || 0}
                </span>
              </div>
              <span className="text-default-400 text-sm">
                ({product.rating?.count || 0} reviews)
              </span>
            </div>
            <p className="text-xl font-bold mt-4">
              ${product.price}
            </p>
          </CardBody>
          <CardFooter className="p-4 pt-0">
            <Button 
              color="primary"
              className="w-full"
              onClick={() => handleBuyClick(product)}  // Changed this line
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
  );
}