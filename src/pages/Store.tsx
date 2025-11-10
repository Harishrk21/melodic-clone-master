import React, { useState } from 'react';
import { ShoppingCart, X, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Footer } from 'react-day-picker';
import Navigation from "@/components/Navigation";
import Footers from "@/components/Footer";
const Store = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const products = [
    { id: 1, name: "Acoustic Guitar", price: 15999, category: "String", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400" },
    { id: 2, name: "Electric Guitar", price: 24999, category: "String", image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=400" },
    { id: 3, name: "Keyboard", price: 18999, category: "Keys", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400" },
    { id: 4, name: "Piano", price: 89999, category: "Keys", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400" },
    { id: 5, name: "Drums Set", price: 45999, category: "Percussion", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400" },
    { id: 6, name: "Drum Pad", price: 12999, category: "Percussion", image: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=400" },
    { id: 7, name: "Active Speakers", price: 8999, category: "Audio", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400" },
    { id: 8, name: "Passive Speakers", price: 6999, category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400" },
    { id: 9, name: "Studio Monitor", price: 14999, category: "Audio", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400" },
    { id: 10, name: "Mixer", price: 19999, category: "Audio", image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=400" },
    { id: 11, name: "PA System", price: 35999, category: "Audio", image: "https://images.unsplash.com/photo-1614963323446-e5b37e63f533?w=400" },
    { id: 12, name: "Acoustic Panels", price: 4999, category: "Audio", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400" },
    { id: 13, name: "Violin", price: 9999, category: "String", image: "https://images.unsplash.com/photo-1612225330812-0e9d7fd1bdb0?w=400" },
    { id: 14, name: "Bass Guitar", price: 21999, category: "String", image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=400" },
    { id: 15, name: "Carnatic Mandolin", price: 7999, category: "String", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400" },
    { id: 16, name: "Sruthi Box", price: 5499, category: "Traditional", image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400" },
    { id: 17, name: "Guitar Strings", price: 599, category: "Accessories", image: "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400" },
    { id: 18, name: "Microphone", price: 3999, category: "Audio", image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400" },
    { id: 19, name: "Guitar Picks Pack", price: 299, category: "Accessories", image: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b1?w=400" },
    { id: 20, name: "Capo", price: 499, category: "Accessories", image: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=400" },
  ];

  const categories = [...new Set(products.map(p => p.category))];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
    setFormSubmitted(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setFormData({ name: '', email: '', phone: '', address: '' });
      setSelectedProduct(null);
    }, 3000);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          Your Music, Our Passion
        </h2>
        <p className="text-xl text-gray-600 mb-8">Premium instruments for musicians worldwide</p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <span key={cat} className="px-6 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer font-medium">
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">
                  ₹{product.price.toLocaleString()}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50" onClick={() => setShowCart(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Shopping Cart</h3>
              <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center py-12">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-purple-600 font-bold">₹{item.price.toLocaleString()}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-100 rounded-full text-red-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-xl font-bold mb-4">
                    <span>Total:</span>
                    <span className="text-purple-600">
                      ₹{cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Buy Now Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full" onClick={e => e.stopPropagation()}>
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Form Submitted!</h3>
                <p className="text-gray-600">We will contact you shortly to complete your order.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Complete Your Purchase</h3>
                {selectedProduct && (
                  <div className="mb-6 p-4 bg-purple-50 rounded-lg">
                    <p className="font-semibold">{selectedProduct.name}</p>
                    <p className="text-purple-600 font-bold">₹{selectedProduct.price.toLocaleString()}</p>
                  </div>
                )}
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Shipping Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Enter your full address"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-6 py-3 border rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Submit Order
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      
    </div>
    <Footers/>
    </>
  );
};

export default Store;