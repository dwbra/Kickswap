import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ListingForm from './components/ListingForm/Form';
import { useDispatch } from 'react-redux';

// import Auth from './components/Auth/Auth';

import { EntireAppPadding } from './styled';
import { getListings } from './actions/Listings';
import BuyPage from './components/Buy/BuyKicks';
import SearchBar from './components/SearchBar/SearchBar';
import Account from './components/Account/Account';
import Auth from './components/Auth/Auth';

function App() {
  const dispatch = useDispatch();

  //when component mounts, we get all the listings from the DB.
  useEffect(() => {
    dispatch(getListings());
    }, [dispatch])

  return (
        <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                <EntireAppPadding>
                    <Route exact path="/sell" component={ListingForm}/>
                    <Route exact path="/buy" component={BuyPage}/>
                    <Route exact path="/search" component={SearchBar}/>
                    <Route exact path="/account" component={Account}/>
                    <Route exact path="/auth" component={Auth}/>
                </EntireAppPadding>
                </Switch>
        </BrowserRouter>
  )
};

export default App;
