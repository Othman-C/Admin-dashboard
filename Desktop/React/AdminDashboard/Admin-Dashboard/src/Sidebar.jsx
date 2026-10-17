import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h2>Admin Panel</h2>
        <ul>
          <li><Link to="/">📊 Dashboard</Link></li>
          <li><Link to="/users">👥 Users</Link></li>
          <li><Link to="/products">📦 Products</Link></li>
          <li><Link to="/settings">⚙️ Settings</Link></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;