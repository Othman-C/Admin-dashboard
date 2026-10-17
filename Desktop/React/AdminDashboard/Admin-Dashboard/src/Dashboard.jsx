import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import StatCard from './StatCard';
import UserTable from './UserTable';
import AddUserForm from './AddUserForm';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  function handleAdduser(newUser) {
    axios.post('https://jsonplaceholder.typicode.com/users', newUser)
      .then(response => {
        setUsers([...users, response.data]);
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  }

  function handleDeleteUser(userId) {
    setUsers(users.filter(user => user.id !== userId));

    axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  }

  function handleUpdateUser(updatedUser) {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));

    axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .catch(error => {
        console.error('Error updating user:', error);
      });
  }

  return (
    <div className="app-layout">
     
      <Sidebar />

      
      <div className="main-content">
        <h1>Main Content Area</h1>
        <h2>Users list (DYNAMIC API)</h2>

        <AddUserForm onAddUser={handleAdduser} />

        <input
          type="text"
          placeholder="🔍 Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-field"
          style={{ maxWidth: '300px', marginBottom: '20px' }}
        />

        {loading ? (
          <p style={{ color: '#64748b', margin: '20px 0' }}>Loading users...</p>
        ) : (
          <UserTable 
            users={filteredUsers} 
            onDeleteUser={handleDeleteUser} 
            onEditUser={handleUpdateUser} 
          />
        )}

        <div className="cards-grid">
          <StatCard title="Total Users" value="1,234" icon="👥" />
          <StatCard title="Active Sessions" value="56" icon="⚡" />
          <StatCard title="New Orders" value="89" icon="📦" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;