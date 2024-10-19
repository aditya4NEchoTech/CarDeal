import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Find Your Next Car</h1>
      <div className="mb-8">
        <input type="text" placeholder="Search by make, model, or keyword" className="w-full p-2 border border-gray-300 rounded" />
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Search</button>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CarCard title="Honda Civic" price="$10,000" />
        <CarCard title="Toyota Corolla" price="$12,000" />
        <CarCard title="Ford Mustang" price="$25,000" />
      </div>
    </div>
  );
};

const CarCard = ({ title, price }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src="https://via.placeholder.com/150" alt="Car" className="w-full h-40 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">Price: {price}</p>
    </div>
  );
};

export default HomePage;
