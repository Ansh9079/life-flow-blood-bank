import { useState, useEffect } from 'react';
import { Search, Phone, MapPin, Filter, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type Donor = {
  id: string | number;
  name: string;
  bloodType: string;
  location: string;
  lastDonation: string;
  contactNumber: string;
  status: string;
};

const mockDonors: Donor[] = [
  {
    id: 1,
    name: 'John Smith',
    bloodType: 'A+',
    location: 'New York, NY',
    lastDonation: '2023-10-15',
    contactNumber: '+1 (555) 123-4567',
    status: 'available',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    bloodType: 'O-',
    location: 'Los Angeles, CA',
    lastDonation: '2023-11-05',
    contactNumber: '+1 (555) 987-6543',
    status: 'available',
  },
  {
    id: 3,
    name: 'Michael Brown',
    bloodType: 'B+',
    location: 'Chicago, IL',
    lastDonation: '2023-09-28',
    contactNumber: '+1 (555) 456-7890',
    status: 'unavailable',
  },
  {
    id: 4,
    name: 'Emily Davis',
    bloodType: 'AB+',
    location: 'Houston, TX',
    lastDonation: '2023-11-20',
    contactNumber: '+1 (555) 234-5678',
    status: 'available',
  },
  {
    id: 5,
    name: 'David Wilson',
    bloodType: 'A-',
    location: 'Philadelphia, PA',
    lastDonation: '2023-10-30',
    contactNumber: '+1 (555) 876-5432',
    status: 'available',
  },
  {
    id: 6,
    name: 'Jennifer Martinez',
    bloodType: 'O+',
    location: 'Phoenix, AZ',
    lastDonation: '2023-11-15',
    contactNumber: '+1 (555) 345-6789',
    status: 'unavailable',
  },
  {
    id: 7,
    name: 'Robert Taylor',
    bloodType: 'B-',
    location: 'San Diego, CA',
    lastDonation: '2023-09-10',
    contactNumber: '+1 (555) 654-3210',
    status: 'available',
  },
  {
    id: 8,
    name: 'Jessica Anderson',
    bloodType: 'AB-',
    location: 'Dallas, TX',
    lastDonation: '2023-10-20',
    contactNumber: '+1 (555) 789-0123',
    status: 'available',
  },
];

export default function BloodInventory() {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true);
        
        const { data: supabaseDonors, error } = await supabase
          .from('donors')
          .select('*') as { data: any[], error: any };
          
        if (error) {
          console.error('Error fetching donors from Supabase:', error);
          toast({
            title: "Error loading donors",
            description: error.message,
            variant: "destructive"
          });
          return;
        }

        const transformedDonors = supabaseDonors?.map(donor => ({
          id: donor.id,
          name: donor.name,
          bloodType: donor.blood_type,
          location: donor.address,
          lastDonation: donor.last_donation,
          contactNumber: donor.phone,
          status: donor.status
        }));
        
        setDonors([...mockDonors, ...(transformedDonors || [])]);
      } catch (error) {
        console.error('Error loading donors:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDonors();
  }, [toast]);

  const filteredDonors = donors.filter((donor) => {
    const matchesSearch = donor.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        donor.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        donor.bloodType?.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesBloodType = selectedBloodType === "all" ? true : donor.bloodType === selectedBloodType;
    
    return matchesSearch && matchesBloodType;
  });

  const sortedDonors = [...filteredDonors].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name?.localeCompare(b.name);
      case 'bloodType':
        return a.bloodType?.localeCompare(b.bloodType);
      case 'location':
        return a.location?.localeCompare(b.location);
      case 'lastDonation':
        return new Date(b.lastDonation || '').getTime() - new Date(a.lastDonation || '').getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Blood Donor Inventory</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-lg text-gray-500">Loading donors...</p>
        </div>
      ) : (
        <>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search donors, locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <Select onValueChange={setSelectedBloodType} defaultValue="all">
                <SelectTrigger>
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Filter by blood type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Blood Types</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={setSortBy} defaultValue="default">
                <SelectTrigger>
                  <div className="flex items-center">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Sort by" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="bloodType">Blood Type</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="lastDonation">Last Donation Date</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Tabs defaultValue="grid">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-500">
                Showing <span className="font-medium">{sortedDonors.length}</span> donors
              </p>
              <TabsList>
                <TabsTrigger value="grid">Grid View</TabsTrigger>
                <TabsTrigger value="list">List View</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="grid" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedDonors.map((donor) => (
                  <Card key={donor.id} className={`overflow-hidden hover:shadow-md transition-shadow ${donor.status === 'unavailable' ? 'opacity-60' : ''}`}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{donor.name}</CardTitle>
                          <CardDescription className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {donor.location}
                          </CardDescription>
                        </div>
                        <div className={`rounded-full px-3 py-1 text-sm font-medium ${donor.bloodType?.includes('O') ? 'bg-blue-100 text-blue-700' : 'bg-blood-100 text-blood-700'}`}>
                          {donor.bloodType}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-500 mb-2">
                        Last donation: {donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : 'N/A'}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full flex items-center justify-center"
                        disabled={donor.status === 'unavailable'}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        {donor.status === 'unavailable' ? 'Unavailable' : 'Contact Donor'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Blood Type</th>
                      <th className="py-3 px-4">Location</th>
                      <th className="py-3 px-4">Last Donation</th>
                      <th className="py-3 px-4">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedDonors.map((donor) => (
                      <tr 
                        key={donor.id} 
                        className={`border-b hover:bg-gray-50 ${donor.status === 'unavailable' ? 'opacity-60' : ''}`}
                      >
                        <td className="py-3 px-4">{donor.name}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${donor.bloodType?.includes('O') ? 'bg-blue-100 text-blue-700' : 'bg-blood-100 text-blood-700'}`}>
                            {donor.bloodType}
                          </span>
                        </td>
                        <td className="py-3 px-4 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {donor.location}
                        </td>
                        <td className="py-3 px-4">{donor.lastDonation ? new Date(donor.lastDonation).toLocaleDateString() : 'N/A'}</td>
                        <td className="py-3 px-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            disabled={donor.status === 'unavailable'}
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            {donor.status === 'unavailable' ? 'Unavailable' : 'Contact'}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
}
