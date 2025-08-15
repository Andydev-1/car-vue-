// Basic product catalog for cars
// In a real app, fetch from API

import car1 from '@/assets/img/fc1.webp'
import car2 from '@/assets/img/fc2.webp'
import car3 from '@/assets/img/fc3.webp'
import car4 from '@/assets/img/fc4.webp'
import car5 from '@/assets/img/fc5.webp'
import car6 from '@/assets/img/fc6.webp'

export const products = [
  {
    id: 'camry-xse-2022',
    name: '2022 Toyota Camry XSE',
    price: 32000,
    stock: 8,
    brand: 'Toyota',
    year: 2022,
    mileage: 12000,
    type: 'Sedan',
    color: 'White',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [car1],
    description:
      'Sporty styling, comfortable ride, and Toyota reliability in a well‑equipped XSE trim.',
    features: ['Apple CarPlay', 'Android Auto', 'Adaptive Cruise', 'Blind-spot Monitor'],
  },
  {
    id: 'bmw-x5-m-2021',
    name: '2021 BMW X5 M Sport',
    price: 58000,
    stock: 5,
    brand: 'BMW',
    year: 2021,
    mileage: 8000,
    type: 'SUV',
    color: 'Black',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [car2],
    description: 'High‑performance luxury SUV with athletic handling and premium interior.',
    features: ['Panoramic Roof', 'Harman Kardon Audio', 'Heated Seats', 'HUD'],
  },
  {
    id: 'mb-c300-2020',
    name: '2020 Mercedes‑Benz C300',
    price: 41000,
    stock: 6,
    brand: 'Mercedes‑Benz',
    year: 2020,
    mileage: 15000,
    type: 'Coupe',
    color: 'Blue',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [car3],
    description: 'Refined coupe blending performance with comfort and timeless design.',
    features: ['Leather Seats', 'Navigation', 'Parking Sensors', 'LED Headlights'],
  },
  {
    id: 'audi-a4-2019',
    name: '2019 Audi A4 Premium',
    price: 27000,
    stock: 9,
    brand: 'Audi',
    year: 2019,
    mileage: 22000,
    type: 'Sedan',
    color: 'Gray',
    transmission: 'Automatic',
    fuel: 'Gasoline',
    images: [car4],
    description: 'Agile and efficient sedan with a modern cabin and sharp tech.',
    features: ['Virtual Cockpit', 'Quattro AWD', 'Keyless Entry', 'Rear Camera'],
  },
  {
    id: 'tesla-model-s-2023',
    name: '2023 Tesla Model S',
    price: 90000,
    stock: 3,
    brand: 'Tesla',
    year: 2023,
    mileage: 3000,
    type: 'Electric',
    color: 'Red',
    transmission: 'Single‑speed',
    fuel: 'Electric',
    images: [car5],
    description: 'All‑electric flagship with blistering performance and cutting‑edge tech.',
    features: ['Autopilot', 'Premium Connectivity', 'Glass Roof', 'HEPA Filter'],
  },
  {
    id: 'honda-crv-2018',
    name: '2018 Honda CR‑V EX',
    price: 24000,
    stock: 12,
    brand: 'Honda',
    year: 2018,
    mileage: 35000,
    type: 'SUV',
    color: 'Silver',
    transmission: 'CVT',
    fuel: 'Gasoline',
    images: [car6],
    description: 'Dependable compact SUV with roomy interior and great efficiency.',
    features: ['Remote Start', 'Lane Keep Assist', 'Adaptive Cruise', 'Power Tailgate'],
  },
]

export function findProductById(id) {
  return products.find((p) => p.id === id)
}


