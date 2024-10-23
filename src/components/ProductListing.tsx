import { motion } from "framer-motion";

import image1 from "@/assets/image/image1.jpg";
import image2 from "@/assets/image/image2.jpg";
import image3 from "@/assets/image/image3.jpg";
import image4 from "@/assets/image/image4.jpg";
import image5 from "@/assets/image/image5.jpg";

const allProducts = [
    { id: 1, name: 'Espresso Blend', price: '$18.99', image: image1 },
    { id: 2, name: 'Cold Brew', price: '$15.99', image: image2 },
    { id: 3, name: 'Latte Art Kit', price: '$22.49', image: image3 },
    { id: 4, name: 'Mocha Delight', price: '$19.99', image: image4 },
    { id: 5, name: 'Premium Arabica', price: '$25.00', image: image5 },
    { id: 6, name: 'Decaf Delight', price: '$17.99', image: image1 },
    { id: 7, name: 'French Press Kit', price: '$34.99', image: image2 },
];

const ProductListingSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                    Explore Our Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        allProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                                    <p className="text-lg font-medium text-gray-600 mt-2">{product.price}</p>
                                    <button
                                        className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition-colors"
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

export default ProductListingSection;
