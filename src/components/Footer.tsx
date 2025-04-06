
import { Droplet, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Droplet className="w-8 h-8 text-blood-500" fill="#ef9a9a" />
              <span className="text-2xl font-bold">Life<span className="text-blood-500">Flow</span></span>
            </div>
            <p className="text-gray-400">
              Connecting blood donors with those in need, saving lives one donation at a time.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:info@lifeflow.org" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-400 hover:text-white transition-colors">Become a Donor</Link>
              </li>
              <li>
                <Link to="/inventory" className="text-gray-400 hover:text-white transition-colors">Find Blood</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Donation Process</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Eligibility Requirements</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blood Types Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>27, Central Road Apex Circle</p>
              <p>Central Road, Malviya Nagar Industrial Area, Malviya Nagar, Jaipur, Rajasthan</p>
              <p>Phone: 0141- 4019798</p>
              <p>Email: admission_bitj@bitmesra.ac.in</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 LifeFlow Blood Bank. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
