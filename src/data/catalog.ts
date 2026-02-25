import { Motorcycle } from '../types';

export const catalogBikes: Motorcycle[] = [
  {
    name: 'CB650R Neo Cafe',
    spec: 'EARTH_ENGINE',
    price: 9299,
    imageUrl: 'https://i.ibb.co/C6d4c1Z/cb650r.png',
    tags: ['AVAILABLE'],
  },
  {
    name: 'MT-07 Dark Attraction',
    spec: 'EARTH_ENGINE',
    price: 8199,
    imageUrl: 'https://i.ibb.co/hKz3Pfv/mt07.png',
  },
  {
    name: 'Apache RR 310',
    spec: 'EARTH_ENGINE',
    price: 3850,
    imageUrl: 'https://i.ibb.co/JqjJzJt/apache.png',
  },
  {
    name: 'Xpulse 200 4V',
    spec: 'EARTH_ENGINE',
    price: 1950,
    imageUrl: 'https://i.ibb.co/yQJ4jVz/zh2.png',
  },
  {
    name: 'YZF R15 V4',
    spec: 'EARTH_ENGINE',
    price: 2499,
    imageUrl: 'https://i.ibb.co/P9z7vry/r18.png',
  },
  {
    name: 'iQube Electric',
    spec: '4.4 kW Motor',
    price: 1850,
    imageUrl: 'https://i.ibb.co/bFNBh6b/panigale.png',
    tags: ['ECO CHOICE'],
  },
];

export const filters = {
  brands: ['Honda', 'Yamaha', 'TVS', 'Hero', 'iQube'],
  capacities: ['50cc - 100cc', '100cc - 150cc', '150cc - 250cc', '250cc - 500cc', '500cc+'],
  fuelTypes: ['Petrol', 'Electric'],
};
