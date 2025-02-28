import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'
import User from './components/user/user.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children :[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path :"about",
//         element: <About/>
//       },
//       {
//         path:"contact",
//         element : <Contact/>
//       },
//       {
//         path:"github",
//         element : <Github/>
//       },
//       {
//         path:"user/:userid",
//         element : <User/>
//       },
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>}/> 
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route
      loader={githubInfoLoader} 
        path='github' 
        element={<Github/>} 
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
