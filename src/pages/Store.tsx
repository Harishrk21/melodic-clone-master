import React, { useState } from 'react';
import { ShoppingCart, X, Check, Music, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from "@/components/Navigation";
import Footers from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";
import keyImg from "/src/assets/key.jpeg";
import violinImg from "/src/assets/violin.jpg";
import drumsImg from "/src/assets/drums.png";
import fluteImg from "/src/assets/flute.jpg";
import guitarImg from "/src/assets/guitar.jpg";


const Store = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  // Updated products list - no duplicates, matching user's requirements
  const products = [
    { id: 1, name: "Keyboard", category: "Keys", image:"https://static.vecteezy.com/system/resources/thumbnails/057/728/509/small/compact-midi-keyboard-for-music-production-png.png"},
    { id: 2, name: "Acoustic Guitar", category: "String", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=600&fit=crop" },
    { id: 3, name: "Electric Guitar", category: "String", image: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800&h=600&fit=crop" },
    { id: 4, name: "Bass Guitar", category: "String", image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=800&h=600&fit=crop" },
    { id: 5, name: "Carnatic Mandolin", category: "String", image: "https://5.imimg.com/data5/SELLER/Default/2025/1/483463903/LZ/AW/VO/233758632/techno-mandolin-tmd24.jpg" },
    { id: 6, name: "Violin", category: "String", image: violinImg },
    { id: 7, name: "Drum Sets", category: "Percussion", image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop" },
    { id: 8, name: "Drum Pads", category: "Percussion", image: "https://png.pngtree.com/png-clipart/20230305/original/pngtree-electronic-drum-pad-cartoon-illustration-png-image_8972281.png" },
    { id: 9, name: "Piano", category: "Keys", image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop" },
    { id: 10, name: "Studio Monitors", category: "Audio", image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop" },
    { id: 11, name: "Active Speakers", category: "Audio", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&h=600&fit=crop" },
    { id: 12, name: "Passive Speakers", category: "Audio", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop" },
    { id: 13, name: "Mixers", category: "Audio", image: "https://t4.ftcdn.net/jpg/06/41/05/99/360_F_641059922_qJL0G7yuBQeOiJRVJV9UF0CCJWvwZKdW.jpg" },
    { id: 14, name: "PA Systems", category: "Audio", image: "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2016/3/700/g700SMCRCH-F.jpg" },
    { id: 15, name: "Acoustic Panels", category: "Audio", image: "https://amazoneceiling.in/wp-content/uploads/2023/08/Recording-Studios-Perfected-Acoustic-Treatment-with-Fabric-Wrapped-Acoustic-Panels.jpg" },
    { id: 16, name: "Guitar Strings", category: "Accessories", image: "https://sterlingmusic.in/cdn/shop/files/DSC01847.jpg?v=1724389622" },
    { id: 17, name: "Guitar Accessories", category: "Accessories", image: "https://images-cdn.ubuy.co.in/667e9a5315803e7a4b6dd71e-48-pcs-guitar-accessories-kit-acoustic.jpg" },
    { id: 18, name: "Sruthi Box", category: "Traditional", image: "https://soundlabs.in/wp-content/uploads/2020/10/81-SwarSudha-Right.png" },
    { id: 19, name: "Flute", category: "Traditional", image: "https://img.freepik.com/premium-photo/wooden-flute-instrument-isolated-white_322433-87.jpg" },
    { id: 20, name: "ChendaMelam", category: "Percussion", image: "https://content.jdmagicbox.com/comp/def_content/chenda-melam-players/1-chenda-melam-players-1-zstnp-250.jpg" },
    { id: 21, name: "Veena", category: "Traditional", image: "https://buyveenai.com/wp-content/uploads/2020/07/ekanda-veenai.jpg" },


  ];

  const categories = [...new Set(products.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // Show cart after adding
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
    setFormSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: `I'm interested in purchasing: ${product.name}`
    });
  };

  const handleCartCheckout = () => {
    setShowForm(true);
    setSelectedProduct(null);
    setFormSubmitted(false);
    const cartItems = cart.map(item => item.name).join(', ');
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      message: `I'm interested in purchasing the following items from my cart: ${cartItems}`
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const cartItems = selectedProduct 
        ? [selectedProduct.name]
        : cart.map(item => item.name);

      const formPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message || `Purchase inquiry for: ${cartItems.join(', ')}`,
        _subject: selectedProduct 
          ? `Store Purchase Inquiry - ${selectedProduct.name}`
          : `Store Purchase Inquiry - Cart (${cart.length} items)`,
        _replyto: formData.email,
        items: cartItems.join(', '),
        inquiryType: selectedProduct ? 'Buy Now' : 'Cart Checkout'
      };

      const response = await fetch('https://formspree.io/f/xzzybgbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setIsSubmitting(false);
        
        // Clear cart if checkout was successful
        if (!selectedProduct) {
          setCart([]);
        }
        
        // Reset form and close after 3 seconds
        setTimeout(() => {
          setShowForm(false);
          setFormData({ name: '', email: '', phone: '', address: '', message: '' });
          setSelectedProduct(null);
          setShowCart(false);
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit your inquiry. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEOHelmet page="store" />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Home", url: "https://www.saregapadhasa.com" },
        { name: "Store", url: "https://www.saregapadhasa.com/store" }
      ])} />
      <Navigation/>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        
        {/* Welcome Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Music className="w-10 h-10 md:w-12 md:h-12" />
                <h1 className="text-3xl md:text-5xl font-bold">
                  🎵 Welcome to the SaReGaPaDhaSa Music Store! 🎵
                </h1>
                <Music className="w-10 h-10 md:w-12 md:h-12" />
              </div>
              <p className="text-xl md:text-2xl mb-6 text-purple-100">
                Your one-stop destination for all musical instruments and accessories 🎶
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">🎹 Products Available:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Keyboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Acoustic Guitar & Electric Guitar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Bass Guitar</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Carnatic Mandolin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Violin</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Drum Sets & Drum Pads</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Piano</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Studio Monitors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Active & Passive Speakers</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Mixers & PA Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Acoustic Panels</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Guitar Strings & Other Accessories</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-yellow-300">•</span>
                  <span>Sruthi Box</span>
                </div>
              </div>
              <p className="text-center mt-8 text-xl font-semibold">
                Find everything you need to create, perform, and record — all in one place!
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-4 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/90 backdrop-blur shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors min-h-[3rem]">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Contact us for pricing and availability
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
                      className="px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center justify-center"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cart Button */}
        {cart.length > 0 && (
          <div className="fixed bottom-6 right-6 z-40">
            <button
              onClick={() => setShowCart(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 font-semibold"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Cart ({cart.length})</span>
            </button>
          </div>
        )}

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
                    <div key={`${item.id}-${index}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.category}</p>
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
                    <p className="text-gray-600 mb-4 text-center">
                      Total Items: {cart.length}
                    </p>
                    <button 
                      onClick={handleCartCheckout}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Purchase Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => !isSubmitting && setShowForm(false)}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Inquiry Submitted!</h3>
                  <p className="text-gray-600">We will contact you shortly with pricing and availability information.</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Product Inquiry</h3>
                  {selectedProduct && (
                    <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="font-semibold text-lg">{selectedProduct.name}</p>
                      <p className="text-sm text-gray-600">{selectedProduct.category}</p>
                    </div>
                  )}
                  {!selectedProduct && cart.length > 0 && (
                    <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <p className="font-semibold text-lg mb-2">Cart Items ({cart.length})</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {cart.map((item, idx) => (
                          <li key={idx}>• {item.name}</li>
                        ))}
                      </ul>
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
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
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        rows={3}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                        placeholder="Enter your full address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows={3}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent disabled:bg-gray-100"
                        placeholder="Any specific requirements or questions..."
                      />
                    </div>
                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        disabled={isSubmitting}
                        className="flex-1 px-6 py-3 border rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          'Submit Inquiry'
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      We'll contact you within 24 hours with pricing and availability.
                    </p>
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
