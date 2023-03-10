
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Forms/Login';
import Role from './components/Role'
import SecretaryRegister from './components/Forms/SecretaryRegister';
import OwnerRegister from './components/Forms/OwnerRegister';
import MaintainanceTeamRegister from './components/Forms/MaintainanceTeamRegister';
import AccountantRegister from './components/Forms/AccountantRegister';
import TenantRegister from './components/Forms/TenantRegister';
import SecretaryHome from './components/Secretary/SecretaryHome';
import OwnerHome from './components/Owner/OwnerHome';
import AccountantHome from './components/Accountant/AccountantHome';
import TenantHome from './components/Tenant/TenantHome';
import MaintainanceTeamHome from './components/MaintainanceTeam/MaintainanceTeamHome';
import PendingRequest from './components/Secretary/PendingRequest';
import Notification from './components/Secretary/Notification'
import ShowNotification from './components/Secretary/ShowNotification';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PendingRequestOwner from './components/Owner/PendingRequestOwner';
import AddcomplaintOwner from './components/Owner/AddcomplaintOwner';
import ShowComplaintOwner from './components/Owner/ShowComplaintOwner';
import PayMaintainanceOwner from './components/Owner/PayMaintainanceOwner';
import AddmainatainanceByAccountant from './components/Accountant/AddmainatainanceByAccountant';
import GetdataAccounts from './components/Accountant/GetdataAccounts'
import AddcomplaintTenant from './components/Tenant/AddComplaintTenant';
import ShowComplaintTenant from './components/Tenant/ShowComplaintTenant';
import SecretaryOtp from './components/Forms/SecretaryOtp';
import ShowComplaintsMaintainanceTeam from './components/MaintainanceTeam/ShowComplaintsMaintainanceTeam';
function App() {

const [user, setUser] = useState({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobileNumber: "",
  societyName: "",
  role: "SECRETARY",
});

  const secotp=(user1)=>{
    setUser(user1);
    console.log(user);
  }

  return (
  <>
  <BrowserRouter>
      <Navbar sticky="top" />
      <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/aboutus" element={<AboutUs/>} /> 
          <Route path="/signup" element={<Role/>} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signupsecretary" element={<SecretaryRegister secotp={secotp}/>} /> 
          <Route path="/signupowner" element={<OwnerRegister/>} /> 
          <Route path="/signupAccountant" element={<AccountantRegister/>} /> 
          <Route path="/signupmaintainanceteam" element={<MaintainanceTeamRegister/>} /> 
          <Route path="/signuptenant" element={<TenantRegister/>} /> 
          <Route path="/loginsecreatry/:id"  element={<SecretaryHome /> }/> 
          <Route path="/loginowner/:id" element={<OwnerHome />} /> 
          <Route path="/logintenant/:id" element={<TenantHome /> }/> 
          <Route path="/loginaccountant/:id" element={< AccountantHome/> }/> 
          <Route path="/loginmaintainanceteam/:id" element={<MaintainanceTeamHome />} /> 
          <Route path="/pendingrequest/:id" element= {< PendingRequest/>}/>
          <Route path="/addnotification/:id" element= {<Notification/>}/>
          <Route path="/shownotification/:id" element= {<ShowNotification/>}/>
          <Route path="/pendingrequestowner/:id" element= {<PendingRequestOwner/>}/>
          <Route path="/addcomplaintowner/:id" element= {<AddcomplaintOwner/>}/>
          <Route path="/showcomplaintowner/:id" element= {<ShowComplaintOwner/>}/>
          <Route path="/paymaintainanceowner/:id" element= {<PayMaintainanceOwner/>}/>
          <Route path="/addmaintainanceacc/:id" element= {<AddmainatainanceByAccountant/>}/>
          <Route path="/getdataacc/:id" element= {<GetdataAccounts/>}/>
          <Route path="/addcomplainttenant/:id" element= {<AddcomplaintTenant/>}/>
          <Route path="/showcomplainttenant/:id" element= {<ShowComplaintTenant/>}/>
          <Route path="/secotp" element= {<SecretaryOtp userc={user}/>}/>
          <Route path="/maintainancecomplaintshow/:id" element= {<ShowComplaintsMaintainanceTeam/>}/>
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
