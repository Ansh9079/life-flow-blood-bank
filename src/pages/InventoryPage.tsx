
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BloodInventory from "@/components/BloodInventory";
import { Phone, Mail, MapPin, Info } from "lucide-react";

export default function InventoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blood-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Find Available <span className="text-blood-600">Blood Donors</span>
              </h1>
              <p className="text-lg text-gray-600">
                Search our database of registered blood donors. You can filter by blood type, location, and more to find the right match for your needs.
              </p>
              
              <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start">
                <Info className="text-blue-500 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-blue-800 text-sm">
                  <strong>Important:</strong> For emergency situations, please contact your local hospital or emergency services immediately. This directory is for non-emergency planning purposes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blood Inventory Section */}
        <BloodInventory />
        
        {/* Contact Information */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Assistance?</h2>
              <p className="text-gray-600 mb-8">
                If you need help finding a donor or have questions about the process, our team is here to assist you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                  <div className="bg-blood-100 text-blood-600 p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                  <div className="bg-blood-100 text-blood-600 p-3 rounded-full mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">help@lifeflow.org</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl flex flex-col items-center text-center">
                  <div className="bg-blood-100 text-blood-600 p-3 rounded-full mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                  <p className="text-gray-600">123 Lifesaving Street</p>
                  <p className="text-sm text-gray-500">Healthcare City, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
