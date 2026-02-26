import { X } from 'lucide-react';
import { Motorcycle } from '../types';

interface VehicleDetailModalProps {
  vehicle: Motorcycle;
  onClose: () => void;
}

export default function VehicleDetailModal({ vehicle, onClose }: VehicleDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-card-bg border border-border-color rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-auto object-contain rounded-lg" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{vehicle.name}</h2>
              <p className="text-lg text-brand-red font-semibold mt-1">{vehicle.spec}</p>
              <p className="text-gray-300 mt-4">{vehicle.description}</p>
            </div>
          </div>
          <div className="mt-8 border-t border-border-color pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-300">
              {vehicle.keyFeatures?.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
