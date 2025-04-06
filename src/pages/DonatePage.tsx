
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonorForm from "@/components/DonorForm";
import { CheckCircle, AlertTriangle, Heart } from "lucide-react";

export default function DonatePage() {
  // Eligibility criteria
  const eligibilityCriteria = [
    {
      title: "General Requirements",
      items: [
        "Be at least 16 years old",
        "Weigh at least 110 pounds",
        "Be in good general health",
        "Have valid ID"
      ]
    },
    {
      title: "Health Requirements",
      items: [
        "Normal blood pressure and pulse",
        "Normal temperature",
        "Acceptable hemoglobin levels",
        "No acute illnesses"
      ]
    },
    {
      title: "Temporary Deferrals",
      items: [
        "Recent tattoos or piercings (wait 3-6 months)",
        "Pregnancy or recent childbirth (wait 6 weeks)",
        "Travel to malaria-risk areas (wait 3 months)",
        "Cold, flu, or other infections (until recovered)"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blood-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a <span className="text-blood-600">Blood Donor</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your donation can save lives. Register today and join our community of heroes.
              </p>
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 h-6 w-6 mr-2" />
                  <span>Quick Registration</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-blood-500 h-6 w-6 mr-2" />
                  <span>Save Lives</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-500 h-6 w-6 mr-2" />
                  <span>Safe Process</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Registration Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Donor Form */}
              <DonorForm />
              
              {/* Eligibility Information */}
              <div className="space-y-8">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <AlertTriangle className="text-yellow-500 h-6 w-6 mr-2" />
                    Eligibility Criteria
                  </h2>
                  
                  {eligibilityCriteria.map((criteria, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-semibold mb-3">{criteria.title}</h3>
                      <ul className="space-y-2">
                        {criteria.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="text-blood-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                  <p className="text-gray-600 mb-4">
                    The donation process is safe, simple, and takes only about an hour from start to finish. Here's what to expect:
                  </p>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="bg-blood-100 text-blood-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">1</span>
                      <div>
                        <strong className="text-gray-900">Registration</strong>
                        <p className="text-gray-600">You'll sign in and show ID.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-blood-100 text-blood-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">2</span>
                      <div>
                        <strong className="text-gray-900">Health Screening</strong>
                        <p className="text-gray-600">We'll check your temperature, blood pressure, and hemoglobin levels.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-blood-100 text-blood-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">3</span>
                      <div>
                        <strong className="text-gray-900">Donation</strong>
                        <p className="text-gray-600">The actual blood donation takes only 8-10 minutes.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="bg-blood-100 text-blood-600 rounded-full w-6 h-6 flex items-center justify-center font-semibold mr-3 mt-0.5">4</span>
                      <div>
                        <strong className="text-gray-900">Refreshments</strong>
                        <p className="text-gray-600">After donating, you'll rest and enjoy refreshments for 10-15 minutes.</p>
                      </div>
                    </li>
                  </ol>
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
