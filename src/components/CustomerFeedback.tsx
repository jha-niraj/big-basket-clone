import { motion } from "framer-motion";
import image1 from "@/assets/image/image6.jpg";

const feedbacks = [
    {
        id: 1,
        name: 'John Doe',
        review: 'The best espresso I have ever had! The aroma and taste are unbeatable.',
        rating: 5,
        image: image1,
    },
    {
        id: 2,
        name: 'Sarah Smith',
        review: 'I love the cold brew selection. Fresh and absolutely delicious!',
        rating: 4,
        image: image1,
    },
    {
        id: 3,
        name: 'Michael Brown',
        review: 'Excellent customer service and great variety of coffee blends.',
        rating: 5,
        image: image1,
    },
];

const CustomerFeedbackSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
                    What Our Customers Are Saying
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        feedbacks.map((feedback) => (
                            <motion.div 
                                key={feedback.id} 
                                className="bg-white rounded-lg shadow-lg p-6"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                            >
                                <img
                                    src={feedback.image}
                                    alt={feedback.name}
                                    className="w-16 h-16 rounded-full mx-auto"
                                />
                                <h3 className="text-xl font-semibold text-gray-800 text-center mt-4">
                                    {feedback.name}
                                </h3>
                                <p className="text-gray-600 text-center mt-2">{feedback.review}</p>
                                <div className="mt-4 text-center">
                                    {[...Array(feedback.rating)].map((_, i) => (
                                        <span key={i} className="text-yellow-400">&#9733;</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default CustomerFeedbackSection;
