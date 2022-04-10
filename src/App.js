import logo from './logo.svg';
import CustomNav from './components/NavigationHeader';
import SiteFooter from './components/SiteFooter';
import Dashboard from './components/Dashboard';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import QuickConversion from './components/QuickConversion';
import BudgetingTool from './components/BudgetingTool';
import AddExpense from './components/AddExpense';
import EditExpense from './components/EditExpense';
import ManageExpenses from './components/ManageExpenses';
import Settings from './components/Settings';
import UserSettings from './components/SettingsComponent';
import { ToastContainer } from 'react-toastify';
 
function App() {
const [isAppSetup] = useState(localStorage.getItem("isAppSetup"));
 return (
    <div className="App">
      <CustomNav />
      <Routes>
      <Route exact path="/"
                element={
                    
                      isAppSetup === "true" ?
                      <QuickConversion /> :
                      <UserSettings /> 
                    
                }
              />
      <Route exact path='/' element={<QuickConversion/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/budgeting-tool' element={<BudgetingTool/>} />
      <Route path='/quick-conversion' element={<QuickConversion/>} />
      <Route path='/add-expenses' element={<AddExpense/>} />
      <Route path='/manage-expenses' element={<ManageExpenses/>} />
      <Route path='/settings' element={<UserSettings/>} />
      </Routes>
      <ToastContainer />
      <SiteFooter />
    </div>
  );
}

export default App;
