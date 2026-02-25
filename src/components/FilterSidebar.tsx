import { filters } from '../data/catalog';

export default function FilterSidebar() {
  return (
    <div className="w-full lg:w-64 bg-dark-bg p-6 rounded-lg border border-border-color">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      
      <FilterGroup title="Brands">
        {filters.brands.map(brand => <Checkbox key={brand} label={brand} />)}
      </FilterGroup>

      <FilterGroup title="Engine Capacity">
        <select className="w-full bg-card-bg border border-border-color rounded-md py-2 px-3 text-sm">
          <option>All Capacities</option>
          {filters.capacities.map(c => <option key={c}>{c}</option>)}
        </select>
      </FilterGroup>

      <FilterGroup title="Fuel Type">
        <div className="flex space-x-2">
          <button className="flex-1 bg-card-bg border border-border-color rounded-md py-2 text-sm">Petrol</button>
          <button className="flex-1 bg-brand-blue border border-brand-blue rounded-md py-2 text-sm">Electric</button>
        </div>
      </FilterGroup>

      <FilterGroup title="Price Range">
        <input type="range" min="1500" max="15000" defaultValue="15000" className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>$1,500</span>
          <span>$15,000+</span>
        </div>
      </FilterGroup>

      <button className="w-full text-center text-sm text-gray-400 mt-4 hover:text-white">Reset All Filters</button>
    </div>
  );
}

const FilterGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-6">
    <h4 className="font-semibold text-sm text-gray-300 mb-3">{title}</h4>
    {children}
  </div>
);

const Checkbox = ({ label }: { label: string }) => (
  <label className="flex items-center space-x-2 text-sm text-gray-400 mb-2 cursor-pointer">
    <input type="checkbox" className="form-checkbox bg-transparent border-gray-600 rounded-sm text-brand-blue focus:ring-brand-blue" />
    <span>{label}</span>
  </label>
);
