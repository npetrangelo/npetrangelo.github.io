import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import LandingPage from './LandingPage/LandingPage';
import BrowsePage from "./BrowsePage/BrowsePage";
import CartPage from "./CartPage/CartPage";
import FollowingPage from "./FollowingPage/FollowingPage";
import SettingsPage from "./SettingsPage/SettingsPage";
import PersonalProfilePage from "./ProfilePage/PersonalProfilePage";
import ProfilePage from "./ProfilePage/ProfilePage";
import PublishPage from "./PublishPage/PublishPage";
import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import ViewPostPage from './ViewPostPage/ViewPostPage';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/personalprofile" component={PersonalProfilePage} />
        <Route path="/browse" component={BrowsePage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/following" component={FollowingPage} />
        <Route path="/publish" component={PublishPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/post" component={ViewPostPage} />
    </Router>
    ,
  document.getElementById('root')
);
