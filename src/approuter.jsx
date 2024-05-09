import React from "react";
// eslint-disable-next-line no-unused-vars

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/login";
// import config from "config";
import Addblog from "./components/pages/Blog/Addblog";
import Blogdetails from "./components/pages/Blog/Blogdetails";
import BlogView from "./components/pages/Blog/BlogView";
import Editblog from "./components/pages/Blog/Editblog";
//For Settings...
import SettingsChangePassword from "./components/settings/SettingsChangePassword";

//Meeting
import AddMeeting from "./components/meeting/AddMeeting";
import EditMeeting from "./components/meeting/EditMeeting";
import MeetingList from "./components/meeting/MeetingList";
//Participents...
import ParticipentList from "./components/participent/ParticipentList";
import AddAppoinments from "./components/appoinments/AddAppoinments";
import AppoinmentList from "./components/appoinments/AppoinmentList";
import EditAppoinments from "./components/appoinments/EditAppoinments";
import EditParticipent from "./components/participent/EditParticipent";

import AddAdmin from "./components/Admin/Add-Admin";
import AdminList from "./components/Admin/AdminList";
import EditAdmin from "./components/Admin/EditAdmin";

import ForgotPassword from "./components/pages/login/ForgotPassword";
import Signup from "./components/pages/login/Signup";

import BlankPage from "./components/pages/login/BlankPage";
import ChangePassword from "./components/pages/login/ChangePassword";
import EditProfile from "./components/pages/login/EditProfile";
import Error from "./components/pages/login/Error";
import LockScreen from "./components/pages/login/LockScreen";
import Profile from "./components/pages/login/Profile";
import Register from "./components/pages/login/Register";
import ServerError from "./components/pages/login/ServerError";
import Admin_Dashboard from "./components/Dashboard/Admin_Dashboard/Admin_Dashboard";

//Accounts
const Approuter = () => {
  // eslint-disable-next-line no-unused-vars
  // const config = "/react/template"
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lockscreen" element={<LockScreen />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/error" element={<Error />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/blankpage" element={<BlankPage />} />
          {/* Blog */}
          <Route path="/blog" element={<Blogdetails />} />
          <Route path="/addblog" element={<Addblog />} />
          <Route path="/editblog" element={<Editblog />} />
          <Route path="/blogview" element={<BlogView />} />
          {/* Settings */}
          <Route
            path="/settingschangepassword"
            element={<SettingsChangePassword />}
          />
          {/* Doctor  */}
          <Route path="/meetinglist" element={<MeetingList />} />
          <Route path="/add-meeting" element={<AddMeeting />} />
          <Route path="/editmeeting" element={<EditMeeting />} />

          {/* Participent */}
          <Route path="/participentlist" element={<ParticipentList />} />
          <Route path="/editparticipent" element={<EditParticipent />} />
          {/* Appoinments */}
          <Route path="/appoinmentlist" element={<AppoinmentList />} />
          <Route path="/addappoinments" element={<AddAppoinments />} />
          <Route path="/editappoinments" element={<EditAppoinments />} />

          {/* Admin */}
          <Route path="/adminlist" element={<AdminList />} />
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/editadmin" element={<EditAdmin />} />

          {/* Dashboard */}
          <Route path="/admin-dashboard" element={<Admin_Dashboard />} />
        </Routes>
      </BrowserRouter>
      <div className="sidebar-overlay"></div>
    </>
  );
};

export default Approuter;
