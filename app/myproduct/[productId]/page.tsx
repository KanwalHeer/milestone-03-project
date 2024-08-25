

'use client';

import { useState, useEffect } from 'react';
import productType1 from '@/app/Type/product';
import Image from 'next/image';
import Header from '@/app/component/header/header';
import Footer from '@/app/component/footer/footer';

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const [addcard, setcard] = useState<number>(0);
  const [product, setProduct] = useState<productType1 | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cart, setCart] = useState<productType1[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0); // State for total price

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/myapiii`);
        const products: productType1[] = await response.json();
        console.log('Fetched Products:', products);
        const productid: number = parseInt(params.productId, 10);
        const foundProduct = products.find((p: productType1) => p.id === productid);
        setProduct(foundProduct || null);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHandler();
  }, [params.productId]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      console.log('Saved Cart:', parsedCart);
      setCart(parsedCart);
      setcard(parsedCart.length);
      calculateTotalPrice(parsedCart); // Calculate total price on load
    }
  }, []);

  const addCard = () => {
    if (product) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setcard(updatedCart.length);
      calculateTotalPrice(updatedCart); // Update total price when adding to cart
    }
  };

  const removeFromCart = (index: number) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setcard(updatedCart.length);
    calculateTotalPrice(updatedCart); // Update total price when removing from cart
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleOrderNow = () => {
    alert(' Your order has been confirmed! It will be delivered shortly, and payment will be collected upon delivery.');
    localStorage.removeItem('cart');
    setCart([]);
    setcard(0);
    setTotalPrice(0); // Reset total price after order
  };

  const calculateTotalPrice = (cartItems: productType1[]) => {
    const total:any = cartItems.reduce((sum:any, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <Header />
      <div>
        <h1 className="text-center text-3xl md:4xl font-extrabold m-6 md:mt-16 text-red-950">Your Cart</h1>
        <div className="p-4 max-w-md mx-auto bg-[#ebdfd9] shadow-lg rounded-lg  md:px-12">
          <div className="mb-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={250}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <h1 className="text-xl font-bold mb-2 text-orange-950">{product.name}</h1>
            <p className="text-[#856d63] mb-2">{product.description}</p>
            <p className="text-xl font-semibold text-red-800">${product.price}</p>
          </div>
          <p className="mt-4 text-red-950">Items in Cart: {addcard}</p>
          <div className="flex md:flex-row my-4 space-x-2">
            <button
              onClick={addCard}
              className="bg-orange-700 mt-4 text-white py-2 px-4  rounded-xl hover:bg-orange-800 transition duration-300"
            >
              Add to Cart
            </button>
            <button
              onClick={toggleCart}
              className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-xl hover:bg-gray-600 transition duration-300"
            >
              {showCart ? 'Hide Cart' : 'Show Cart'}
            </button>
          </div>

          {showCart && (
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-inner">
              <h2 className="text-xl font-bold mb- text-orange-950">Cart Items:</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item, index) => (
                    <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={250}
                        className="w-full h-auto object-cover rounded-t-lg"
                      />
                      <h3 className="text-lg font-semibold text-orange-950">{item.name}</h3>
                      <p className="mb-2 text-[#856d63]">{item.description}</p>
                      <p className="text-xl font-semibold text-red-800">${item.price}</p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600 transition duration-300 mt-2"
                      >
                        Remove from Cart
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {cart.length > 0 && (
                <>
                  <p className="mt-4 text-lg font-bold text-orange-950">Total Price: ${totalPrice}</p>
                  <button
                    onClick={handleOrderNow}
                    className="mt-4 bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                  >
                    Order Now
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;

