import BestSellersSection from "@/components/BestSeller";
import CustomerFeedbackSection from "@/components/CustomerFeedback";
import FeaturedProductsSection from "@/components/FeaturedProducts";
import HeroBanner from "@/components/HeroBanner";
import ProductListingSection from "@/components/ProductListing";
import SubscriptionSection from "@/components/Subscription";
import WhyChooseUsSection from "@/components/WhyChooseUs";
import { motion } from "framer-motion";

export default function HomePage() {
    return (
        <section className="flex flex-col gap-10 pt-24 sm:pt-16">
            <div
                className="flex flex-col gap-4"
            >
                <motion.div
                    className="w-full flex flex-col justify-center items-center text-center text-white"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                >
                    <h1 className="text-5xl lg:text-6xl text-black dark:text-white font-bold shadow-2xl rounded-2xl p-2 w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
                        Fuel Your Day with the <span className="text-yellow-950 dark:text-yellow-600">Perfect</span> <span className="text-ellipsis text-green-400">Brew</span>
                    </h1>
                    <p className="mt-4 hidden sm:flex text-lg lg:text-xl max-w-2xl text-black dark:text-white">
                        Discover premium, handpicked coffee blends that awaken your senses. Delivered fresh to your door, one sip at a time.
                    </p>
                </motion.div>
                <div className="flex flex-col items-center justify-center">
                    <HeroBanner />
                </div>
            </div>

            <ProductListingSection />
            <FeaturedProductsSection />
            <BestSellersSection />
            <WhyChooseUsSection />
            <CustomerFeedbackSection />
            <SubscriptionSection />
        </section>
    )
}