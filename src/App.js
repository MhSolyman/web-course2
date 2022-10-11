
import { } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import About from './components/About/About';
import Chart from './components/Chart/Chart';
import Home from './components/Home/Home';
import Quize from './components/Quize/Quize';
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
        path:"/blog",
        element:<About></About>

      },
      {
        path:'/quize/:quizeId',
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizeId}`),
        element:<Quize></Quize>
      },
      {
        path:'/statistics',
        element:<Chart></Chart>
      }
    ]
    },
    {
      path:"*",
      element:<div><h1>This is not route. Plese click header option: 404 not found</h1></div>
    }

  
  ]);

  return (
    <div > 
<RouterProvider router={router} ></RouterProvider>

      
    </div>
  );
}

export default App;
