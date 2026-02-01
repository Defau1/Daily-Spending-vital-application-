import './App.css'
import HelloLandingPage from './components/HelloLandingPage/HelloLandingPage.jsx';
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>

    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HelloLandingPage />}/>
          <Route path='/register-page' element={<RegisterPage />}/>
          <Route path='/login-page' element={<LoginPage />}/>
        </Routes>
      </div>
    </BrowserRouter>

    </>
  )
}

export default App;
