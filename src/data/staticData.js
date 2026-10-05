import sportImage from '../images/Home/sport.jpg';
import luxuryImage from '../images/Home/luxury.png';
import familyImage from '../images/Home/family.jpg';
import economyImage from '../images/Home/economy.jpg';
import convertibleImage from '../images/Home/convertible.jpg';
import carImage from '../images/Home/unsplash_UF2nwAcD8Mo.png';
import toyotaLogo from '../images/brandLogo/toyota.jpg';
import mercedesLogo from '../images/brandLogo/mercedes.jpg';
import BMWLogo from '../images/brandLogo/BMW.jpg';
import nissanLogo from '../images/brandLogo/nissan.jpg';
import porscheLogo from '../images/brandLogo/porsche.png';

const STORAGE_KEYS = {
  cars: 'car-demo-cars',
  brands: 'car-demo-brands',
  bookings: 'car-demo-bookings',
};

const seedBrands = [
  { _id: 'brand-toyota', name: 'Toyota', picture: toyotaLogo },
  { _id: 'brand-mercedes', name: 'Mercedes-Benz', picture: mercedesLogo },
  { _id: 'brand-bmw', name: 'BMW', picture: BMWLogo },
  { _id: 'brand-nissan', name: 'Nissan', picture: nissanLogo },
  { _id: 'brand-porsche', name: 'Porsche', picture: porscheLogo },
];

const seedCars = [
  { _id: 'car-1', name: 'BMW M4 Competition', brand: 'BMW', category: 'Sport', model: '2024', color: 'Black', gear: 'Automatic', horse: 6, seatNumber: 4, topSpeed: 290, available: true, pictures: [sportImage, carImage], price: { dayly: 850, weekly: 5600, monthly: 22000 }, description: { EN: 'A powerful sports coupe with premium comfort and performance.', AR: 'سيارة رياضية قوية تجمع بين الأداء والراحة الفاخرة.' } },
  { _id: 'car-2', name: 'Mercedes-Benz S-Class', brand: 'Mercedes-Benz', category: 'Luxury', model: '2024', color: 'Silver', gear: 'Automatic', horse: 8, seatNumber: 5, topSpeed: 250, available: true, pictures: [luxuryImage, carImage], price: { dayly: 1200, weekly: 7900, monthly: 30000 }, description: { EN: 'An elegant luxury sedan with a quiet, comfortable cabin.', AR: 'سيارة سيدان فاخرة وأنيقة بمقصورة هادئة ومريحة.' } },
  { _id: 'car-3', name: 'Toyota Land Cruiser', brand: 'Toyota', category: 'Family', model: '2023', color: 'White', gear: 'Automatic', horse: 6, seatNumber: 7, topSpeed: 220, available: true, pictures: [familyImage, carImage], price: { dayly: 700, weekly: 4600, monthly: 18000 }, description: { EN: 'A spacious SUV suited to family trips and city driving.', AR: 'سيارة دفع رباعي واسعة مناسبة للعائلة والمدينة.' } },
  { _id: 'car-4', name: 'Nissan Sunny', brand: 'Nissan', category: 'Economy', model: '2024', color: 'White', gear: 'Automatic', horse: 4, seatNumber: 5, topSpeed: 180, available: true, pictures: [economyImage, carImage], price: { dayly: 100, weekly: 650, monthly: 2400 }, description: { EN: 'An economical and practical choice for everyday travel.', AR: 'خيار اقتصادي وعملي للتنقل اليومي.' } },
  { _id: 'car-5', name: 'Porsche 911 Carrera', brand: 'Porsche', category: 'Convertible', model: '2023', color: 'Red', gear: 'Automatic', horse: 6, seatNumber: 2, topSpeed: 293, available: true, pictures: [convertibleImage, sportImage], price: { dayly: 1500, weekly: 9800, monthly: 37000 }, description: { EN: 'An iconic performance car made for open-road drives.', AR: 'سيارة أداء أيقونية للقيادة والاستمتاع بالطريق.' } },
  { _id: 'car-6', name: 'BMW X5', brand: 'BMW', category: 'Luxury', model: '2023', color: 'Blue', gear: 'Automatic', horse: 6, seatNumber: 5, topSpeed: 243, available: true, pictures: [carImage, familyImage], price: { dayly: 650, weekly: 4300, monthly: 16500 }, description: { EN: 'A premium SUV with generous space and a smooth ride.', AR: 'سيارة دفع رباعي فاخرة وواسعة بقيادة مريحة.' } },

  
];

export const staticArticles = [
  { pk: 1, header: 'A guide to renting a car in Sample City', summary: 'What to know before choosing a demo rental car.', description: '<p>Choose a vehicle that suits your itinerary, check the rental terms, and keep your driving documents with you. A compact car is handy around town, while an SUV offers extra room for longer trips.</p>', photo: familyImage, link: '', linkTitle: '' },
  { pk: 2, header: 'Explore Sample City in comfort', summary: 'Ideas for making every demo drive easier.', description: '<p>Plan ahead for busy areas, allow extra time for parking, and pick a car that makes your journey comfortable. Sample City has options for every kind of trip, from town streets to open roads.</p>', photo: convertibleImage, link: '', linkTitle: '' },
];

function readStored(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export const getCars = () => readStored(STORAGE_KEYS.cars, seedCars);
export const getAvailableCars = () => getCars().filter((car) => car.available !== false);
export const getCarById = (id) => getCars().find((car) => car._id === id);
export const saveCar = (car) => {
  const cars = getCars();
  const id = car._id || `car-${Date.now()}`;
  const normalized = {
    ...car,
    _id: id,
    price: car.price || { dayly: car.dayly, weekly: car.weekly, monthly: car.monthly },
    description: car.description || { EN: car.descEn || '', AR: car.descAr || '' },
    available: car.available ?? true,
  };
  const next = cars.some((item) => item._id === id)
    ? cars.map((item) => item._id === id ? normalized : item)
    : [...cars, normalized];
  writeStored(STORAGE_KEYS.cars, next);
  return normalized;
};
export const deleteCar = (id) => writeStored(STORAGE_KEYS.cars, getCars().filter((car) => car._id !== id));

export const getBrands = () => readStored(STORAGE_KEYS.brands, seedBrands);
export const saveBrand = (brand) => {
  const brands = getBrands();
  const next = [...brands, { ...brand, _id: brand._id || `brand-${Date.now()}` }];
  writeStored(STORAGE_KEYS.brands, next);
  return next;
};
export const deleteBrand = (id) => writeStored(STORAGE_KEYS.brands, getBrands().filter((brand) => brand._id !== id));

const seedBookings = [
  { _id: 'booking-1', name: 'Demo Customer', phone: '+1-202-555-0101', start: '2026-10-05', end: '2026-10-08', car: seedCars[0], status: 'pending' },
  { _id: 'booking-2', name: 'Sample Guest', phone: '+1-202-555-0102', start: '2026-10-10', end: '2026-10-12', car: seedCars[3], status: 'accepted' },
];

export const getBookings = () => readStored(STORAGE_KEYS.bookings, seedBookings);
export const saveBooking = (booking) => writeStored(STORAGE_KEYS.bookings, [...getBookings(), { ...booking, _id: `booking-${Date.now()}`, status: 'pending' }]);
export const updateBooking = (id, changes) => writeStored(STORAGE_KEYS.bookings, getBookings().map((booking) => booking._id === id ? { ...booking, ...changes } : booking));
export const deleteBooking = (id) => writeStored(STORAGE_KEYS.bookings, getBookings().filter((booking) => booking._id !== id));

export const demoAdminCredentials = { email: 'admin@example.com', password: 'admin123' };
