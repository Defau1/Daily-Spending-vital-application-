import './App.css'
import HelloLandingPage from './components/HelloLandingPage/HelloLandingPage.jsx';
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import DashboardPage from './components/dashboard/DashboardPage/DashboardPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HelloLandingPage />}/>
          <Route path='*' element={<ErrorPage />}/>
          <Route path='/register-page' element={<RegisterPage />}/>
          <Route path='/login-page' element={<LoginPage />}/>
          <Route path='/dashboard-page' element={<DashboardPage />}/>        
        </Routes>
      </div>
    </BrowserRouter>

    </>
  )
}

export default App;
