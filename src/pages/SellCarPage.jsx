const SellCarPage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Sell Your Car</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Make</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter car make" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Model</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter car model" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">Submit Listing</button>
        </form>
      </div>
    );
  };
  
  export default SellCarPage;
  