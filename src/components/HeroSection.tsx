
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-red-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your donation can save <span className="text-blood-600">lives</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Join our community of blood donors and help those in need. One donation can save up to three lives.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <Button asChild size="lg" className="bg-blood-600 hover:bg-blood-700 text-white text-lg">
                <Link to="/donate">
                  Become a Donor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blood-600 text-blood-600 hover:bg-blood-50 text-lg">
                <Link to="/inventory">Find Blood</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blood-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blood-200 rounded-full opacity-60"></div>
            
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl transform rotate-3 animate-fade-in">
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Blood Donations Today</h3>
                  <p className="text-sm text-gray-500">Updated hourly</p>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-sm font-medium text-gray-600">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Type A+</p>
                  <p className="text-2xl font-bold text-blood-600">12 units</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-blood-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Type O-</p>
                  <p className="text-2xl font-bold text-blood-600">8 units</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-blood-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Type B+</p>
                  <p className="text-2xl font-bold text-blood-600">15 units</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-blood-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Type AB+</p>
                  <p className="text-2xl font-bold text-blood-600">5 units</p>
                  <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                    <div className="bg-blood-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blood drops decoration */}
      <div className="hidden lg:block absolute bottom-0 left-0 transform translate-y-1/2">
        <div className="blood-drop bg-blood-300 opacity-20 w-16 h-32"></div>
      </div>
      <div className="hidden lg:block absolute top-0 right-0 transform -translate-y-1/2">
        <div className="blood-drop bg-blood-300 opacity-20 w-12 h-24"></div>
      </div>
    </section>
  );
}
