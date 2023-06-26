import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} />} />
        <Route path='/create' element={<Create setData={setData} />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/read/:id' element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
