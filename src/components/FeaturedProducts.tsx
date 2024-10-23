import { motion } from "framer-motion";

import image1 from "@/assets/image/image1.jpg";
import image2 from "@/assets/image/image2.jpg";
import image3 from "@/assets/image/image3.jpg";

const featuredProducts = [
    { id: 1, name: 'Premium Espresso', price: '$24.99', image: image1 },
    { id: 2, name: 'Arabica Dark Roast', price: '$21.49', image: image2 },
    { id: 3, name: 'Cappuccino Set', price: '$29.99', image: image3 },
];

const FeaturedProductsSection = () => {
    return (
        <section className="py-16 bg-yellow-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        featuredProducts.map((product) => (
                            <motion.div 
                                key={product.id} 
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            >
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    <span className="absolute top-2 left-2 bg-red-500 text-white py-1 px-3 text-sm font-bold rounded-lg">
                                        Featured
                                    </span>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-lg font-medium text-gray-600 mt-2">{product.price}</p>
                                    <button
                                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                                    >
                                        View Product
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default FeaturedProductsSection;
