import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import image1 from "@/assets/image/image1.jpg";
import image2 from "@/assets/image/image2.jpg";
import image3 from "@/assets/image/image3.jpg";
import image4 from "@/assets/image/image4.jpg";
import image5 from "@/assets/image/image5.jpg";

const images = [ image1, image2, image3, image4, image5 ];

const HeroBanner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen">
            <motion.div 
                className="absolute top-0 w-full h-full"
                initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            >
                {
                    images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Coffee ${index + 1}`}
                            className={`w-full h-full rounded-2xl object-cover absolute transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))
                }
            </motion.div>
        </section>
    );
};


export default HeroBanner;
