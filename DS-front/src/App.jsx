import './App.css'
import HelloLandingPage from './components/HelloLandingPage/HelloLandingPage.jsx';
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import LoginPage from './components/LoginPage/LoginPage.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import DashboardPage from './components/dashboard/DashboardPage/DashboardPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Analytic from './components/dashboard/pages/Analytic/Analytic.jsx';
import Budget from './components/dashboard/pages/Budget/Budget.jsx';
import Category from './components/dashboard/pages/Category/Category.jsx';
import PersonalAccount from './components/dashboard/pages/PersonalAccount/PersonalAccount.jsx';
import Dashboard from './components/dashboard/pages/Dashboard/Dashboard.jsx';
import History from './components/dashboard/pages/History/History.jsx';
import Spending from './components/dashboard/pages/Spending/Spending.jsx';
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

          <Route path='/dashboard-page' element={<DashboardPage />}>
            <Route index element={<Dashboard />} />
            <Route path='spending' element={<Spending />} />
            <Route path='history' element={<History />} />
            <Route path='category' element={<Category />} />
            <Route path='analytic' element={<Analytic />} />
            <Route path='budget' element={<Budget />} />
            <Route path='account' element={<PersonalAccount />} />
          </Route>
          
          
        </Routes>
      </div>
    </BrowserRouter>

    </>
  )
}

export default App;
