
import { useState } from 'react';
import { Menu, X, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplet className="w-8 h-8 text-blood-600" fill="#ffcdd2" />
            <span className="text-2xl font-bold text-gray-800">Life<span className="text-blood-600">Flow</span></span>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blood-600 transition-colors">Home</Link>
            <Link to="/donate" className="text-gray-700 hover:text-blood-600 transition-colors">Donate</Link>
            <Link to="/inventory" className="text-gray-700 hover:text-blood-600 transition-colors">Inventory</Link>
            <Link to="/about" className="text-gray-700 hover:text-blood-600 transition-colors">About</Link>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-blood-600 hover:bg-blood-700 text-white">
              Donate Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blood-600 transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/donate" className="text-gray-700 hover:text-blood-600 transition-colors" onClick={toggleMenu}>Donate</Link>
              <Link to="/inventory" className="text-gray-700 hover:text-blood-600 transition-colors" onClick={toggleMenu}>Inventory</Link>
              <Link to="/about" className="text-gray-700 hover:text-blood-600 transition-colors" onClick={toggleMenu}>About</Link>
              <Button className="bg-blood-600 hover:bg-blood-700 text-white w-full">Donate Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
