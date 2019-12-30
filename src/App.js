import React from 'react';
import logo from './logo.svg';
import { NavLink , NavbarBrand, Navbar} from 'reactstrap';
import Menu from './components/Menucomponent';

import './App.css';

function App() {
  return (
    
      
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              hey Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />

      </div>
  );
}

export default App;
