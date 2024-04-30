import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Products } from "./pages/products/Products"
import { Details } from "./pages/details/Details"
import { NewProduct } from "./pages/newProduct/NewProduct"
import { MainPage } from "./pages/MainPage/MainPage"
import { MainProduct } from "./pages/mainProduct/MainProduct"
function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <MainPage />, children: [
        {index:true, element: <Home /> },
        {path:'product',element:<MainProduct/>, children:[   
            { index:true, element: <Products />, },

        { path: ':productId', element: <Details /> },
        { path: 'new', element: <NewProduct /> },] }
   

      ]
    },


  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>

  )
}

export default App
