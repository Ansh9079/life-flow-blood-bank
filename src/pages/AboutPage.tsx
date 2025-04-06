
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Award, Users, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
      bio: "Dr. Johnson has over 15 years of experience in hematology and transfusion medicine."
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      bio: "Michael oversees the daily operations of LifeFlow, ensuring smooth donor experiences."
    },
    {
      name: "Maria Rodriguez",
      role: "Community Outreach",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      bio: "Maria leads our community engagement programs and donor recruitment initiatives."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blood-50 to-white py-12 md:py-20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-blood-600">LifeFlow</span>
              </h1>
              <p className="text-xl text-gray-600">
                We're on a mission to connect blood donors with recipients, making the donation process smooth and accessible for everyone.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At LifeFlow, we believe that access to safe blood is a fundamental right. Our mission is to create a seamless connection between blood donors and those in need, ensuring that no life is lost due to blood shortage.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We strive to educate communities about the importance of regular blood donation and work to make the donation process as simple and convenient as possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Heart className="text-blood-600 h-5 w-5 mr-3 mt-1" />
                    <p className="text-gray-600">Promoting voluntary, non-remunerated blood donation</p>
                  </div>
                  <div className="flex items-start">
                    <Award className="text-blood-600 h-5 w-5 mr-3 mt-1" />
                    <p className="text-gray-600">Ensuring the highest quality and safety standards</p>
                  </div>
                  <div className="flex items-start">
                    <Users className="text-blood-600 h-5 w-5 mr-3 mt-1" />
                    <p className="text-gray-600">Building a community of regular blood donors</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-blood-100 rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blood-200 rounded-full opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1000&auto=format&fit=crop" 
                  alt="Blood donation" 
                  className="rounded-lg shadow-lg relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our History */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our History</h2>
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blood-600 text-white flex items-center justify-center font-bold">1</div>
                    <div className="h-full w-px bg-blood-200 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2015: The Beginning</h3>
                    <p className="text-gray-600">
                      LifeFlow was founded by a group of healthcare professionals who saw the need for a more efficient blood donation system. What started as a small community initiative quickly grew into a larger network.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blood-600 text-white flex items-center justify-center font-bold">2</div>
                    <div className="h-full w-px bg-blood-200 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2018: Expansion</h3>
                    <p className="text-gray-600">
                      We expanded our operations to five major cities, partnering with local hospitals and healthcare providers to create a robust network of blood donation centers.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blood-600 text-white flex items-center justify-center font-bold">3</div>
                    <div className="h-full w-px bg-blood-200 mt-2"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2020: Digital Transformation</h3>
                    <p className="text-gray-600">
                      We launched our digital platform to connect donors and recipients more efficiently, making it easier than ever to find and donate blood.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-6 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-blood-600 text-white flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Today: Growing Community</h3>
                    <p className="text-gray-600">
                      Today, LifeFlow serves thousands of donors and recipients nationwide, with plans to expand globally and continue improving blood donation accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blood-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blood-600 to-blood-800 text-white">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of something bigger. Register as a donor today and help us save more lives.
            </p>
            <Button asChild size="lg" className="bg-white text-blood-700 hover:bg-gray-100">
              <Link to="/donate">
                Become a Donor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
