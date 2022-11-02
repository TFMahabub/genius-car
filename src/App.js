import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routers from './routers/Router';

function App() {
  return (
    <RouterProvider router={routers}>

    </RouterProvider>
  );
}

export default App;
