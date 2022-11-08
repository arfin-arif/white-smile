import logo from './logo.svg';
import './App.css';
import router from './Router/Route/Route';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
