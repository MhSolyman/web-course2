
import { } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home';
import Main from './layout/Main';







function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[{
        path:'/',
        loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>

      }
    ]
    },

  
  ]);

  return (
    <div > 
<RouterProvider router={router} ></RouterProvider>

      
    </div>
  );
}

export default App;
