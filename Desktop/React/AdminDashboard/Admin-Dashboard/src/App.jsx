import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Users from './Users';
import Products from './Products';


function App() {
  return (
    
    
    <div><Navbar />
    <div style={{ display: 'flex' }}>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users  />} />

        </Routes>
      </BrowserRouter>
      

    </div>
    </div>

  );
}

export default App;