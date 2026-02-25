import { Motorcycle } from '../types';

interface CatalogCardProps {
  motorcycle: Motorcycle;
}

export default function CatalogCard({ motorcycle }: CatalogCardProps) {
  return (
    <div className="bg-card-bg border border-border-color rounded-lg overflow-hidden group">
      <div className="relative p-4 bg-white/5">
        <img src={motorcycle.imageUrl} alt={motorcycle.name} className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
        {motorcycle.tags && motorcycle.tags.map(tag => (
          <span key={tag} className={`absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded ${tag === 'AVAILABLE' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}>{tag}</span>
        ))}
        <label className="absolute top-2 right-2 flex items-center space-x-1 text-xs cursor-pointer">
          <input type="checkbox" className="form-checkbox bg-transparent border-gray-500 rounded-sm text-brand-blue focus:ring-brand-blue" />
          <span className="text-gray-400">COMPARE</span>
        </label>
      </div>
      <div className="p-4">
        <p className="text-xs text-brand-blue font-bold">{motorcycle.spec}</p>
        <h3 className="text-lg font-bold text-white mt-1">{motorcycle.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-gray-400 text-sm">Starting at</p>
            <p className="text-xl font-bold text-white">${motorcycle.price.toLocaleString()}</p>
          </div>
          <button className="text-sm font-bold text-white hover:text-brand-blue transition-colors">Details &rarr;</button>
        </div>
      </div>
    </div>
  );
}
