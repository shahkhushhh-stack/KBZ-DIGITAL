import { ShoppingCart } from 'lucide-react';
import { GearItem } from '../data/gear';

interface GearCardProps {
  item: GearItem;
}

export default function GearCard({ item }: GearCardProps) {
  return (
    <div className="bg-card-bg border border-border-color rounded-lg overflow-hidden group">
      <div className="relative p-4 bg-white/5">
        <img src={item.imageUrl} alt={item.name} className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
        {item.tags && item.tags.map(tag => (
          <span key={tag} className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${tag === 'TOP RATED' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'}`}>{tag}</span>
        ))}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-md font-bold text-white">{item.name}</h3>
          <p className="text-md font-bold text-brand-blue">${item.price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-gray-400 mt-1 h-10">{item.description}</p>
        <button className="w-full mt-4 bg-white/5 border border-white/10 text-white text-sm font-bold py-2.5 rounded-md hover:bg-brand-blue hover:border-brand-blue transition-colors flex items-center justify-center space-x-2">
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
