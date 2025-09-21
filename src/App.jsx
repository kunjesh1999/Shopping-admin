
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard'
import Header from './Components/Header'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    exact:true,
    element:<>
    <section className='main'>
       <Header/>
    </section>  
    
    </>
  }
])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
   
