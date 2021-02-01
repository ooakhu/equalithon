import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/landingPage/Home';
import RegistrationForm from './components/RegistrationForm';
import SignIn from './components/SignIn';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import './App.css';
import RegistrationGroup from './components/RegistrationGroup';
import DAndIRegistration from './components/DAndIRegistration';
import SponsorHome from './components/SponsorHome';
import Sponsorship from './components/Sponsorship';
import RegistrationEndNavigation from './components/RegistrationEndNavigation';
import EqualithonSelection from './components/EqualithonSelection';
import SelectLocation from './components/SelectLocation';
import JobInfo from './components/JobInfo';
import EqualithonInfo from './components/EqualithonInfo';
import CompanyRating from './components/CompanyRating';
import ParticipantRegistration from './components/ParticipantRegistration';
import Slack from './components/Slack';
import Profile from './components/Profile';
import JoinTeam from './components/JoinTeam'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={RegistrationForm} />
        <Route path="/registrationendnavigation" exact component={RegistrationEndNavigation} />
        <Route path="/home" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/equalithon-selection" exact component={EqualithonSelection} />
        <Route path="/slack" exact component={Slack} />
        <Route path="/select-location" exact component={SelectLocation} />
        <Route path="/job-info" exact component={JobInfo} />
        <Route path="/equalithon-info" exact component={EqualithonInfo} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/group-registration" exact component={RegistrationGroup} />
        <Route path="/sponsorship" exact component={Sponsorship} />
        <Route path="/sponsorhome" exact component={SponsorHome} />
        <Route path="/dandiregistration" exact component={DAndIRegistration} />
        <Route path="/company-rating" exact component={CompanyRating} />
        <Route path="/Participant-Registration" exact component={ParticipantRegistration} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/joinTeam" exact component={JoinTeam} />
      </Router>
    </div>
  );
}

export default App;

