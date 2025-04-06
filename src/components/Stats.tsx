
import { Users, Droplet, HeartPulse, Timer } from "lucide-react";

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Making a <span className="text-blood-600">Real Impact</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blood-100 text-blood-600 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">5,000+</h3>
            <p className="text-gray-600">Registered donors</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blood-100 text-blood-600 mb-4">
              <Droplet className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Units collected</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blood-100 text-blood-600 mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">30,000+</h3>
            <p className="text-gray-600">Lives saved</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blood-100 text-blood-600 mb-4">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">15 min</h3>
            <p className="text-gray-600">Average donation time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
