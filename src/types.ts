export interface Motorcycle {
  name: string;
  spec: string;
  price: string;
  imageUrl: string;
  brand: string;
  type: 'Bike' | 'Scooter';
  engine?: string;
  power?: string;
  weight?: string;
  tags?: string[];
  description?: string;
  keyFeatures?: string[];
}
