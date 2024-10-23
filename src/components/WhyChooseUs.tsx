import { CheckCircleIcon } from 'lucide-react';
import { motion } from "framer-motion";

const benefits = [
    { id: 1, title: 'Freshness Guaranteed', description: 'All our coffee beans are roasted fresh and delivered to your door with rich flavor in every cup.' },
    { id: 2, title: 'Eco-Friendly Packaging', description: 'We care about the environment. That’s why we use 100% compostable and sustainable packaging.' },
    { id: 3, title: 'Fast & Free Delivery', description: 'Order now and enjoy free shipping on all orders above $30. We deliver fresh coffee to your door within 3 days.' },
    { id: 4, title: 'Exclusive Beverages', description: 'Explore unique blends and exclusive flavors that you won’t find anywhere else.' }
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-16 bg-gray-100 rounded-2xl">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                    Why Choose Us?
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {
                        benefits.map((benefit) => (
                            <motion.div 
                                key={benefit.id} 
                                className="flex items-start"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            >
                                <CheckCircleIcon className="h-10 w-10 text-green-500 mr-4" />
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800">{benefit.title}</h3>
                                    <p className="mt-2 text-lg text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
