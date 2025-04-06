
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Database, Server, Shield, Key, Users } from "lucide-react";

export default function DatabaseSetupPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Connect to Supabase",
      description: "Click the green Supabase button in the top right of the Lovable interface.",
      icon: Database
    },
    {
      id: 2,
      title: "Create Tables",
      description: "Create the donors table with necessary fields like blood type, contact info, etc.",
      icon: Server
    },
    {
      id: 3,
      title: "Set Up Authentication",
      description: "Configure authentication for donors and administrators.",
      icon: Users
    },
    {
      id: 4,
      title: "Configure Access Rules",
      description: "Set up Row Level Security policies to control data access.",
      icon: Shield
    },
    {
      id: 5,
      title: "Generate API Keys",
      description: "Create and secure your API keys for frontend access.",
      icon: Key
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blood-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Database <span className="text-blood-600">Setup Guide</span>
              </h1>
              <p className="text-lg text-gray-600">
                Follow these steps to connect your LifeFlow application to a database using Supabase.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              {/* Steps */}
              <div className="relative mb-12">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"></div>
                
                {steps.map((step) => (
                  <div key={step.id} className="relative mb-8">
                    <div 
                      className={`flex items-start ${activeStep === step.id ? "" : "opacity-60"}`}
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 z-10 ${
                        step.id < activeStep 
                          ? "bg-green-500 text-white" 
                          : step.id === activeStep 
                            ? "bg-blood-500 text-white" 
                            : "bg-white border-2 border-gray-200"
                      }`}>
                        {step.id < activeStep ? (
                          <Check className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-semibold">{step.id}</span>
                        )}
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                          {step.title}
                          <step.icon className="ml-2 h-4 w-4 text-gray-500" />
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Active step content */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>{steps[activeStep - 1].title}</CardTitle>
                  <CardDescription>Step {activeStep} of {steps.length}</CardDescription>
                </CardHeader>
                <CardContent>
                  {activeStep === 1 && (
                    <div>
                      <p className="mb-4">To connect to Supabase:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Click on the green Supabase button in the top right of the Lovable interface</li>
                        <li>Create a new Supabase project or connect to an existing one</li>
                        <li>Allow Lovable to access your Supabase project</li>
                        <li>Once connected, we can proceed to create the database tables</li>
                      </ol>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div>
                      <p className="mb-4">Create the following tables in your Supabase database:</p>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <h4 className="font-mono text-sm font-semibold mb-2">donors</h4>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{`CREATE TABLE donors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  blood_type TEXT NOT NULL,
  location TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  last_donation TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'available',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                        </pre>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <h4 className="font-mono text-sm font-semibold mb-2">requests</h4>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{`CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  requester_name TEXT NOT NULL,
  requester_contact TEXT NOT NULL,
  blood_type_needed TEXT NOT NULL,
  location TEXT NOT NULL,
  donor_id UUID REFERENCES donors(id),
  status TEXT DEFAULT 'pending',
  urgency TEXT DEFAULT 'normal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 3 && (
                    <div>
                      <p className="mb-4">Set up authentication for your application:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>In your Supabase dashboard, go to Authentication → Settings</li>
                        <li>Enable Email authentication</li>
                        <li>Optionally, enable other providers like Google, Facebook, etc.</li>
                        <li>Configure email templates for verification, password reset, etc.</li>
                      </ol>
                    </div>
                  )}
                  
                  {activeStep === 4 && (
                    <div>
                      <p className="mb-4">Configure Row Level Security (RLS) policies:</p>
                      <div className="bg-gray-50 p-4 rounded-md mb-4">
                        <h4 className="font-mono text-sm font-semibold mb-2">donors table policy</h4>
                        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{`-- Enable RLS on the donors table
ALTER TABLE donors ENABLE ROW LEVEL SECURITY;

-- Allow reading of all donor data by anyone
CREATE POLICY "Anyone can view available donors" 
  ON donors FOR SELECT 
  USING (status = 'available');

-- Allow donors to update their own information
CREATE POLICY "Donors can update own data" 
  ON donors FOR UPDATE 
  USING (auth.uid() = id);

-- Allow insertion by authenticated users
CREATE POLICY "Authenticated users can become donors" 
  ON donors FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');`}
                        </pre>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 5 && (
                    <div>
                      <p className="mb-4">Generate and secure API keys:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>In your Supabase dashboard, go to Settings → API</li>
                        <li>Copy your <strong>anon/public</strong> key for client-side operations</li>
                        <li>Use environment variables in your Lovable project to store these keys securely</li>
                        <li>Never expose your <strong>service_role</strong> key in the frontend</li>
                      </ol>
                      
                      <div className="bg-amber-50 border border-amber-200 rounded p-4 mt-4">
                        <p className="text-amber-800 text-sm">
                          <strong>Important:</strong> Never commit API keys to your repository. 
                          Always use environment variables and ensure they're added to your .gitignore file.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
                  disabled={activeStep === 1}
                >
                  Previous Step
                </Button>
                <Button 
                  onClick={() => setActiveStep(Math.min(steps.length, activeStep + 1))}
                  disabled={activeStep === steps.length}
                >
                  Next Step
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
