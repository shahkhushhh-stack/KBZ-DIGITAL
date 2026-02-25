export interface GearItem {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags?: string[];
}

export const gearItems: GearItem[] = [
  {
    name: 'Pro-Carbon X1 Helmet',
    description: 'Featherlight aerodynamic carbon fiber with integrated aerodynamics.',
    price: 450.00,
    imageUrl: 'https://i.ibb.co/6mYxZf3/scooter1.png',
  },
  {
    name: 'Urban Nomad Jacket',
    description: 'Durable Cordura fabric with CE Level 2 armor. Minimalist design.',
    price: 320.00,
    imageUrl: 'https://i.ibb.co/yWp3wzM/scooter2.png',
    tags: ['TOP RATED'],
  },
  {
    name: 'Leather Speed Gloves',
    description: 'Full-grain cowhide with reinforced palms and touch-screen compatible fingertips.',
    price: 120.00,
    imageUrl: 'https://i.ibb.co/fHk0fW7/scooter3.png',
  },
  {
    name: 'V3 Comm System',
    description: 'Crystal clear audio and noise cancellation. Connect with up to 6 riders simultaneously.',
    price: 280.00,
    imageUrl: 'https://i.ibb.co/M8GvjY9/scooter4.png',
  },
];
