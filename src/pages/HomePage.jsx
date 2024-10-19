import CarCard from '../components/CarCard';

const HomePage = () => {
  const cars = [
    { id: 1, model: "Toyota Corolla", price: 12000, year: 2015, image: "" },
    { id: 2, model: "Honda Civic", price: 15000, year: 2017, image: "" },
    { id: 3, model: "Ford Mustang", price: 25000, year: 2018, image: "" },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Find Your Dream Car</h1>
        <p className="mt-4 text-lg">Browse our wide range of used cars or list your car for sale!</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
