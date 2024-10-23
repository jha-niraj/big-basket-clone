import { useState } from 'react';
import { motion } from "framer-motion";

import image1 from "@/assets/image/image1.jpg";
import image2 from "@/assets/image/image2.jpg";
import image3 from "@/assets/image/image3.jpg";
import image4 from "@/assets/image/image4.jpg";

const products = [
    { id: 1, name: 'Espresso Blend', price: '$18.99', image: image1 },
    { id: 2, name: 'Cold Brew', price: '$15.99', image: image2 },
    { id: 3, name: 'Latte Art Kit', price: '$22.49', image: image3 },
    { id: 4, name: 'Mocha Delight', price: '$19.99', image: image4 },
];

const BestSellersSection = () => {
    const [quantities, setQuantities] = useState(products.map(() => 1)); // Initialize quantities with default value 1 for each product

    const handleIncrement = (index: any) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    };

    const handleDecrement = (index: any) => {
        const newQuantities = [...quantities];
        if (newQuantities[index] > 1) {
            newQuantities[index] -= 1;
        }
        setQuantities(newQuantities);
    };

    const handleAddToCart = (product: any, quantity: any) => {
        alert(`Added ${quantity} of ${product.name} to the cart!`);
    };

    return (
        <section className="py-16 bg-gray-50 rounded-2xl">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                    Our Best Sellers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        products.map((product, index) => (
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
                                    <div className="flex items-center justify-between">
                                        <div className="mt-4 flex justify-center items-center">
                                            <button
                                                onClick={() => handleDecrement(index)}
                                                className="px-3 py-1 bg-gray-200 rounded-lg text-gray-800 font-semibold"
                                            >
                                                -
                                            </button>
                                            <span className="mx-4 text-lg">{quantities[index]}</span>
                                            <button
                                                onClick={() => handleIncrement(index)}
                                                className="px-3 py-1 bg-gray-200 rounded-lg text-gray-800 font-semibold"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleAddToCart(product, quantities[index])}
                                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors"
                                        >
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BestSellersSection;
