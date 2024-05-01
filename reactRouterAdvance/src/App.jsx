import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { Details ,fetchData as loaderEvent} from "./pages/details/Details"
import { NewProduct } from "./pages/newProduct/NewProduct"
import { MainPage } from "./pages/MainPage/MainPage"
import { MainProduct } from "./pages/mainProduct/MainProduct"
import { fetchData as loaderFunction } from "./pages/mainProduct/MainProduct"
import { Error } from "./componets/error/Error"
import { Edit } from "./pages/edit/Edit"
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainPage />, errorElement:<Error/>, children: [
        {index:true, element: <Home /> },
        {path:'product',element:<MainProduct/>,
        errorElement:<Error/>,
        children:[   
            { index:true, element: <Products />, },

        { path: ':productId',id:'px', loader: loaderEvent, element: <Details />, 
      
      children:[    

      { path: 'edit', element: <Edit /> }]
      
      
      },
      { path: 'new', element: <NewProduct /> },
        
        
    
      ],
        loader:loaderFunction
       }
   

      ]
    },


  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App
