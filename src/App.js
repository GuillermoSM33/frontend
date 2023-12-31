import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes, BrowserRouter} from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Compras from './paginas/Compras';
import Productos from './paginas/Productos';
import Nosotros from './paginas/Nosotros';
import Categorias from './paginas/Categorias';
import Contactos from './paginas/Contactos';
import Confirmacion from './paginas/Confirmacion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/Compras' element={<Compras/>}></Route>
      <Route path='/Productos' element={<Productos/>}></Route>
      <Route path='/Nosotros' element={<Nosotros/>}></Route>
      <Route path='/Categorias' element={<Categorias/>}></Route>
      <Route path='/Contactos' element={<Contactos/>}></Route>
      <Route path='/Confirmacion' element={<Confirmacion/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
