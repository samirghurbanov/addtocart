import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/layouts/Main';
import { routerArr } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Errorpage from './components/layouts/Errorpage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <Errorpage />,
      children: routerArr
    }
  ])
  return (
    <div >
      <Provider store={store}><RouterProvider router={router} /></Provider>
    </div>
  );
}

export default App;
