import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import {Routes,Route,Link} from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import UserPage from './pages/UserPage'
import AdminDashboard from './pages/AdminDashboard'
import PageNotFound from './pages/PageNotFound'

function App() {


  return (
   <>
  <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="login/user/:name" element={<UserPage/>}/>
        <Route path="login/admin/:name" element={<AdminDashboard/>}/>
     </Routes>
   <Footer/>
   </>
  )
}

export default App
