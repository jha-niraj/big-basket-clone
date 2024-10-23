import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                {/* Newsletter Subscription */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <h3 className="text-xl font-semibold mb-4 md:mb-0">
                        Stay Updated with Our Latest Brews
                    </h3>
                    <div className="flex w-full md:w-auto">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 text-white mr-2"
                        />
                        <Button variant="secondary">Subscribe</Button>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold mb-4">About Us</h4>
                        <ul className="space-y-2">
                            <li><Link to="#">Our Story</Link></li>
                            <li><Link to="#">Sustainability</Link></li>
                            <li><Link to="#">Ethical Sourcing</Link></li>
                            <li><Link to="#">Our Coffee Experts</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li><Link to="#">Shop All Coffee</Link></li>
                            <li><Link to="#">Brewing Guides</Link></li>
                            <li><Link to="#">Coffee Subscriptions</Link></li>
                            <li><Link to="#">Gift Cards</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Customer Service</h4>
                        <ul className="space-y-2">
                            <li><Link to="#">FAQs</Link></li>
                            <li><Link to="#">Shipping & Returns</Link></li>
                            <li><Link to="#">Track Your Order</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li><Link to="#">Facebook</Link></li>
                            <li><Link to="#">Instagram</Link></li>
                            <li><Link to="#">Twitter</Link></li>
                            <li><Link to="#">YouTube</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
                    <p className="mb-4 md:mb-0">&copy; 2024 CoffeeCo. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link to="#" aria-label="Facebook">
                            <Facebook className="h-6 w-6" />
                        </Link>
                        <Link to="#" aria-label="Instagram">
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link to="#" aria-label="Twitter">
                            <Twitter className="h-6 w-6" />
                        </Link>
                        <Link to="#" aria-label="YouTube">
                            <Youtube className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
