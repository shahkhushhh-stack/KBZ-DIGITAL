import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { gearItems } from '../data/gear';
import GearCard from '../components/GearCard';

export default function GearPage() {
  return (
    <div className="bg-dark-bg min-h-screen text-white">
      <Header />
      <HeroSection />
      <ProductGrid />
      <JoinClubSection />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-black/50 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 border-b border-white/10">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-white">Moto<span className="text-brand-blue">Elite</span> Gear</h1>
            <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white">Helmets</a>
              <a href="#" className="hover:text-white">Jackets</a>
              <a href="#" className="hover:text-white">Performance</a>
              <a href="#" className="hover:text-white">Tech</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input type="text" placeholder="Search gear" className="bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm w-56 focus:outline-none focus:ring-1 focus:ring-brand-blue" />
            </div>
            <button className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-blue text-white text-xs rounded-full">3</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <div className="relative min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519758943904-8a78318a3681?q=80&w=2940&auto=format&fit=crop"
          alt="Rider with helmet"
          className="w-full h-full object-cover object-center opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/80 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-brand-blue font-semibold text-sm tracking-widest">NEW COLLECTION</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mt-2">Safety First for Professional Commuters</h1>
          <p className="mt-4 text-gray-300 max-w-lg">
            Premium riding gear designed for the urban professional. Compromise nothing on style, protection, or boardroom aesthetics.
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
              <span>Shop Safety Collection</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-transparent border border-white/20 text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              View Lookbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductGrid() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Premium Riding Gear</h2>
        {/* Add filter/view controls here */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {gearItems.map(item => <GearCard key={item.name} item={item} />)}
      </div>
    </div>
  );
}

function JoinClubSection() {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-4xl font-bold">Join the Elite Club</h2>
        <p className="text-gray-400 mt-2">Subscribe to get exclusive early access to limited edition drops, maintenance tips, and community events for professional riders.</p>
        <div className="mt-8 flex max-w-md mx-auto">
          <input type="email" placeholder="Enter your email" className="bg-white/5 border border-r-0 border-white/10 rounded-l-lg py-3 px-4 text-sm w-full focus:outline-none focus:ring-1 focus:ring-brand-blue" />
          <button className="bg-brand-blue text-white font-bold px-8 rounded-r-lg hover:bg-blue-600 transition-colors">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
