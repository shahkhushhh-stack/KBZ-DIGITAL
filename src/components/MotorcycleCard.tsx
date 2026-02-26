import { Plus } from 'lucide-react';
import { Motorcycle } from '../types';
import { formatCurrency } from '../utils';

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
  onOpenModal: (motorcycle: Motorcycle) => void;
}

export default function MotorcycleCard({ motorcycle, onOpenModal }: MotorcycleCardProps) {
  return (
    <div className="bg-card-bg border border-border-color rounded-lg overflow-hidden group">
      <div className="relative p-4 bg-black">
        <img src={motorcycle.imageUrl} alt={motorcycle.name} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
        {motorcycle.tags && motorcycle.tags.map(tag => (
            <span key={tag} className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${tag === 'HOT DEAL' ? 'bg-brand-red text-white' : 'bg-blue-500 text-white'}`}>{tag}</span>
        ))}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{motorcycle.name}</h3>
        <p className="text-sm text-gray-400 mt-1">{motorcycle.spec}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-xl font-bold text-white">{formatCurrency(motorcycle.price)}</p>
          <button onClick={() => onOpenModal(motorcycle)} className="w-10 h-10 rounded-full bg-gray-700 hover:bg-brand-red flex items-center justify-center transition-colors">
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
