
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HomePage() {
  // Steps for donation process
  const steps = [
    {
      icon: <Calendar className="h-10 w-10 text-blood-600" />,
      title: "Register",
      description: "Fill out our donor form with your personal and medical information."
    },
    {
      icon: <Shield className="h-10 w-10 text-blood-600" />,
      title: "Screening",
      description: "Undergo a brief health check to ensure you're eligible to donate."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-blood-600" />,
      title: "Donate",
      description: "The donation process only takes about 10-15 minutes of your time."
    }
  ];
  
  // FAQs
  const faqs = [
    {
      question: "Who can donate blood?",
      answer: "Most people can donate blood if they are in good health, weigh at least 110 pounds, and are at least 16 years old."
    },
    {
      question: "How often can I donate blood?",
      answer: "You can donate whole blood every 56 days, platelets every 7 days (up to 24 times a year), and plasma every 28 days."
    },
    {
      question: "Is donating blood safe?",
      answer: "Yes, donating blood is completely safe. All equipment is sterile, used only once, and then discarded."
    },
    {
      question: "How long does it take to donate blood?",
      answer: "The entire blood donation process takes about 1 hour, with the actual donation taking only about 8-10 minutes."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Stats Section */}
        <Stats />
        
        {/* Donation Process */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Simple <span className="text-blood-600">Donation Process</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Donating blood is a quick and easy process that can help save lives. Here's how it works:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-blood-600 text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-blood-600 hover:bg-blood-700 text-white text-lg">
                <Link to="/donate">
                  Become a Donor Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked <span className="text-blood-600">Questions</span>
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Get answers to the most common questions about blood donation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Have more questions about blood donation?</p>
              <Button variant="outline" className="border-blood-600 text-blood-600 hover:bg-blood-50">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blood-700 to-blood-900 text-white py-16">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your blood donation can save up to 3 lives. Join our community of donors today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-blood-700 hover:bg-gray-100">
                <Link to="/donate">Register as Donor</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blood-800">
                <Link to="/inventory">Find Blood</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
