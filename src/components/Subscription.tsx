const SubscriptionSection = () => {
    return (
        <section className="py-16 bg-yellow-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
                    Join Our Coffee Community!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                    Subscribe to get updates on new products, special offers, and more.
                </p>
                <div className="flex justify-center mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 w-2/3 md:w-1/3 border border-gray-300 rounded-lg"
                    />
                    <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;
