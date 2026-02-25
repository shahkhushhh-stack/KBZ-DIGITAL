import { ChevronDown, ArrowRight, ShieldCheck, Calendar, Wallet } from 'lucide-react';
import MotorcycleCard from '../components/MotorcycleCard';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Motorcycle } from '../types';
import { vehicles } from '../data/vehicles';

const brandOptions = ['HERO', 'TVS', 'HONDA', 'ROYAL ENFIELD', 'YAMAHA', 'SUZUKI'];
const typeOptions = ['BIKE', 'SCOOTER'];
const budgetOptions = ['Under ₹1,00,000', '₹1,00,000 - ₹2,00,000', '₹2,00,000 - ₹5,00,000'];

const brands = [
  { name: 'KTM', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/KTM-Logo.svg/1200px-KTM-Logo.svg.png', websiteUrl: 'https://www.ktmindia.com/' },
  { name: 'Ducati', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ducati_logo.svg/2560px-Ducati_logo.svg.png', websiteUrl: 'https://www.ducati.com/in/en/home' },
  { name: 'BMW', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png', websiteUrl: 'https://www.bmw-motorrad.in/en/models/modeloverview.html' },
  { name: 'Aprilia', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Aprilia-logo.svg/1200px-Aprilia-logo.svg.png', websiteUrl: 'https://apriliaindia.com/' },
];

const topSellingBikes: Motorcycle[] = [
  {
    name: 'Hero Splendor Plus',
    price: '75000',
    engine: '97.2cc',
    power: '8 bhp',
    weight: '112 kg',
    imageUrl: 'https://res.cloudinary.com/dqodbpoek/image/upload/v1772039364/hero-splendor-plus-why-generations-of-love_fqykdc.avif',
    spec: '97.2cc / 8 bhp',
  },
  {
    name: 'Royal Enfield Hunter 350',
    price: '200000',
    engine: '349cc',
    power: '20.2 bhp',
    weight: '181 kg',
    imageUrl: 'https://imgcdn.zigwheels.my/large/gallery/exterior/89/1881/royal-enfield-hunter-350-slant-rear-view-full-image-814662.jpg',
    spec: '349cc / 20.2 bhp',
  },
];

const sportBikes = vehicles.filter(v => v.type === 'Bike').slice(0, 3);

export { sportBikes };

export default function HomePage() {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const navigate = useNavigate();

  const handleExplore = () => {
    const params = new URLSearchParams();
    if (brand) params.set('brand', brand);
    if (type) params.set('type', type);
    navigate(`/catalog?${params.toString()}`);
  };
  return (
    <>
      <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-start text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599836724939-5053f55e91f3?q=80&w=2940&auto=format&fit=crop"
            alt="Custom cafe racer motorcycle"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 flex justify-start">
          <div className="max-w-2xl text-left">
            <p className="text-brand-red font-semibold text-sm tracking-widest">PREMIUM FLEET 2024</p>
            <h1 className="text-7xl md:text-8xl font-extrabold text-white leading-tight mt-2 font-display tracking-wider">
              FIND YOUR <br /> PERFECT <span className="text-brand-red">RIDE</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-lg">
              Experience precision engineering and raw power. From urban agility to open-road dominance, discover the motorcycle that defines you.
            </p>

            <div className="mt-8 bg-black/30 backdrop-blur-sm p-4 rounded-lg border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <SelectMenu label="Select Brand" options={brandOptions} value={brand} onChange={setBrand} />
                  <SelectMenu label="Type" options={typeOptions} value={type} onChange={setType} />
                  <SelectMenu label="Budget" options={budgetOptions} />
                </div>
                <button onClick={handleExplore} className="bg-brand-red text-white font-bold py-3 px-6 rounded-lg w-full hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <span>EXPLORE NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PerformanceSection />
      <FeatureBanner />
      <TopSellingSection />
      <BrandsSection />
      <StyleAndComfortSection />
    </>
  );
}

function PerformanceSection() {
  return (
    <div className="bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-4xl font-bold font-display tracking-wider">PERFORMANCE & <span className="text-brand-red">POWER</span></h2>
            <p className="text-gray-400 mt-1">Highly-tuned machines for the discerning sportbiker.</p>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sportBikes.map(bike => (
            <MotorcycleCard key={bike.name} motorcycle={bike} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureBanner() {
  return (
    <div className="bg-brand-red py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FeatureItem 
            icon={<Wallet className="w-8 h-8 mx-auto mb-3" />} 
            title="INSTANT FINANCE" 
            description="Apply and get a decision in minutes"
          />
          <FeatureItem 
            icon={<ShieldCheck className="w-8 h-8 mx-auto mb-3" />} 
            title="3-YEAR WARRANTY" 
            description="Comprehensive coverage on all models"
          />
          <FeatureItem 
            icon={<Calendar className="w-8 h-8 mx-auto mb-3" />} 
            title="BOOK TEST RIDE" 
            description="Experience your dream bike with premium testing"
          />
        </div>
      </div>
    </div>
  );
}

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function TopSellingSection() {
  return (
    <div className="bg-dark-bg py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold font-display tracking-wider">TOP SELLING</h2>
          <p className="text-gray-400 mt-1">Our most popular models, loved by riders everywhere.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {topSellingBikes.map(bike => (
            <MotorcycleCard key={bike.name} motorcycle={bike} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandsSection() {
  return (
    <div className="bg-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-400 text-sm font-bold tracking-widest uppercase mb-8">PARTNER BRANDS</h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity"
            >
              <img src={brand.logoUrl} alt={`${brand.name} Logo`} className="h-10 lg:h-12 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100" referrerPolicy="no-referrer" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function StyleAndComfortSection() {
  return (
    <div className="bg-dark-bg py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold font-display tracking-wider">STYLE & <span className="text-brand-red">COMFORT</span></h2>
            <p className="text-gray-400 mt-2 max-w-md">Navigate the urban landscape with effortless grace. Our collection of scooters combines sleek design with rider-centric comfort for efficient and enjoyable city commuting.</p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-center"><CheckIcon /> Ergonomic seating for long urban commutes</li>
              <li className="flex items-center"><CheckIcon /> Advanced fuel-injection technology</li>
              <li className="flex items-center"><CheckIcon /> Bluetooth connectivity for navigation & calls</li>
            </ul>
            <button className="mt-8 bg-transparent border border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-colors">
              VIEW SCOOTERS RANGE
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <a href="https://www.heromotocorp.com/en-in/motorcycles/practical/splendor-plus.html" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dqodbpoek/image/upload/v1772039364/hero-splendor-plus-why-generations-of-love_fqykdc.avif" alt="Hero Splendor Plus" className="rounded-lg w-full h-full object-cover" referrerPolicy="no-referrer" />
            </a>
            <a href="https://www.honda2wheelersindia.com/scooter/activa125" target="_blank" rel="noopener noreferrer">
              <img src="https://res.cloudinary.com/dqodbpoek/image/upload/v1772039248/activa-6g-right-side-view-3_iobulz.avif" alt="Honda Activa" className="rounded-lg w-full h-full object-cover" referrerPolicy="no-referrer" />
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

const CheckIcon = () => <svg className="w-5 h-5 text-brand-red mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>;

function FeatureItem({ icon, title, description }: FeatureItemProps) {
    return (
        <div>
            {icon}
            <h3 className="font-bold text-lg tracking-wider">{title}</h3>
            <p className="text-sm opacity-80">{description}</p>
        </div>
    )
}

function SelectMenu({ label, options, value, onChange }: { label: string, options?: string[], value: string, onChange: (value: string) => void }) {
  return (
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white appearance-none focus:outline-none focus:ring-1 focus:ring-brand-red">
        <option value="">{label}</option>
        {options && options.map(option => (
          <option key={option} value={option} className="text-black">{option}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
    </div>
  );
}
