const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Manage Cars</h2>
          <p>View, edit, or delete car listings</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
          <p>View, manage or delete user accounts</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Transactions</h2>
          <p>View and manage car sale transactions</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
