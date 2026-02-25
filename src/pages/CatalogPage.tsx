import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { vehicles } from '../data/vehicles';
import MotorcycleCard from '../components/MotorcycleCard';

export default function CatalogPage() {
  const [searchParams] = useSearchParams();
  const brand = searchParams.get('brand');
  const type = searchParams.get('type');

  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      const brandMatch = brand ? vehicle.brand.toLowerCase() === brand.toLowerCase() : true;
      const typeMatch = type ? vehicle.type.toLowerCase() === type.toLowerCase() : true;
      return brandMatch && typeMatch;
    });
  }, [brand, type]);

  const title = brand && type ? `${brand} ${type}s` : 'Full Catalog';

  return (
    <div className="bg-dark-bg min-h-screen text-white pt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 capitalize">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.length > 0 ? (
            filteredVehicles.map(bike => (
              <MotorcycleCard key={bike.name} motorcycle={bike} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">No vehicles found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}
