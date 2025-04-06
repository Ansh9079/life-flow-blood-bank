
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default function DonorForm() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    bloodType: '',
    age: '',
    lastDonation: '',
    medicalConditions: '',
    submitting: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitting: true }));
    
    try {
      // Create donor data object with current date and available status
      const donorData = {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        address: formState.address,
        blood_type: formState.bloodType,
        age: parseInt(formState.age),
        last_donation: formState.lastDonation || new Date().toISOString().split('T')[0],
        medical_conditions: formState.medicalConditions,
        status: 'available'
      };
      
      // Store in Supabase
      const { error } = await supabase
        .from('donors')
        .insert(donorData);
      
      if (error) {
        console.error('Error inserting donor:', error);
        toast({
          title: "Registration failed",
          description: error.message,
          variant: "destructive"
        });
        setFormState(prev => ({ ...prev, submitting: false }));
        return;
      }
      
      // Show success toast
      toast({
        title: "Registration successful!",
        description: "Thank you for registering as a blood donor.",
      });
      
      // Redirect to inventory page
      navigate('/inventory');
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Registration failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive"
      });
      setFormState(prev => ({ ...prev, submitting: false }));
    }
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Donor Registration</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="John Doe" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="johndoe@example.com" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="address">Address</Label>
            <Input 
              id="address"
              name="address"
              value={formState.address}
              onChange={handleChange}
              placeholder="123 Main St, City, State" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="bloodType">Blood Type</Label>
            <Select 
              onValueChange={(value) => handleSelectChange('bloodType', value)}
              value={formState.bloodType}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select blood type" />
              </SelectTrigger>
              <SelectContent>
                {bloodTypes.map(type => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="age">Age</Label>
            <Input 
              id="age"
              name="age"
              type="number"
              min="18"
              max="65"
              value={formState.age}
              onChange={handleChange}
              placeholder="25" 
              required
            />
          </div>
          
          <div>
            <Label htmlFor="lastDonation">Last Donation Date (If Any)</Label>
            <div className="relative">
              <Input 
                id="lastDonation"
                name="lastDonation"
                type="date"
                value={formState.lastDonation}
                onChange={handleChange}
              />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
        
        <div>
          <Label htmlFor="medicalConditions">Medical Conditions (Optional)</Label>
          <Textarea 
            id="medicalConditions"
            name="medicalConditions"
            value={formState.medicalConditions}
            onChange={handleChange}
            placeholder="Please list any medical conditions or medications"
            className="h-24"
          />
        </div>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <Button 
            type="submit" 
            className="bg-blood-600 hover:bg-blood-700 text-white w-full md:w-auto px-8"
            disabled={formState.submitting}
          >
            {formState.submitting ? 'Registering...' : 'Complete Registration'}
          </Button>
          <p className="text-sm text-gray-500 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Registration takes less than 2 minutes
          </p>
        </div>
      </form>
    </div>
  );
}
