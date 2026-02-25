import { Search, User, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const superbikeBrands = [
  { name: 'KTM', imageUrl: 'https://motorcycle-logos.com/wp-content/uploads/2016/10/KTM-logo.png' },
  { name: 'DUCATI', imageUrl: 'https://cdn-0.motorcycle-logos.com/wp-content/uploads/2016/10/Ducati-Logo-Description.png' },
  { name: 'APRILIA', imageUrl: 'https://wlassets.aprilia.com/wlassets/aprilia/master/Aprilia_World/Racing/sport_production/editorial/Aprilia_Racing_Sport_Production/original/Aprilia_Racing_Sport_Production.png?1594819922759' },
  { name: 'BMW', imageUrl: 'https://static.vecteezy.com/system/resources/previews/020/502/870/original/bmw-brand-logo-car-symbol-blue-and-white-design-germany-automobile-illustration-with-black-background-free-vector.jpg' }
];

function SuperbikeDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button 
        onMouseEnter={() => setIsOpen(true)}
        className="text-sm font-medium transition-colors text-gray-400 hover:text-white flex items-center space-x-1"
      >
        <span>SUPERBIKE</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 w-48 bg-card-bg border border-border-color rounded-lg shadow-lg py-2 z-50">
          <ul>
            {superbikeBrands.map(brand => (
              <li key={brand.name}>
                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-white/5">
                  <img src={brand.imageUrl} alt={brand.name} className="w-8 h-8 object-contain mr-3" referrerPolicy="no-referrer" />
                  <span>{brand.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`;

  return (
    <header className="bg-black bg-opacity-50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 border-b border-white/10">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-white tracking-wider">KBZ <span className="text-brand-red">DIGITAL</span></h1>
            <nav className="hidden md:flex items-center space-x-6">
              <SuperbikeDropdown />
              <NavLink to="/compare" className={navLinkClasses}>Compare</NavLink>
              <NavLink to="/emi-calculator" className={navLinkClasses}>EMI Calculator</NavLink>
              <a href="https://www.google.com/maps/dir//KIRAN+BIKE+ZONE,+Shop+no+1+Dhaniv,+Pelhar+Rd,+opp.+shiv+mandir,+Naka,+Dhaniv+Baug,+Nalasopara+East,+Dhaniv,+Maharashtra+401208/@19.2331844,72.8633633,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7a918e633c93f:0xe564b415fb00785d!2m2!1d72.8546831!2d19.4338082?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm font-medium transition-colors text-gray-400 hover:text-white">Showrooms</a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search brands or models" className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm w-64 focus:outline-none focus:ring-1 focus:ring-brand-red" />
            </div>
            <NavLink to="/signup" className="bg-brand-red text-white font-bold text-sm px-6 py-2.5 rounded-full hover:bg-red-700 transition-colors">Sign Up</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
