import React, { useState, useEffect } from 'react';
import { NavbarStyling, NavTitles } from './styled';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as actionType from '../../constants/ActionTypes';
import decode from 'jwt-decode';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    // console.log(user);
  
    const logout = () => {
      dispatch({ type: actionType.LOGOUT });
  
      history.push('/auth');
  
      setUser(null);

      console.log('User signed out successfully.');

      alert("You have signed out!");
    };
  
    useEffect(() => {
      const token = user?.token;
  
      if (token) {
        const decodedToken = decode(token);
  
        if (decodedToken.exp * 1000 < new Date().getTime()) logout();
      }
  
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
                <NavbarStyling>
                    <NavTitles><Link to="/">Home</Link></NavTitles>
                    <NavTitles><Link to="/buy">Buy Kicks</Link></NavTitles>
                    <NavTitles><Link to="/sell">Sell Kicks</Link></NavTitles>
                    <NavTitles><Link to="/search">Search</Link></NavTitles>
                    <NavTitles>
                      {user ? (
                        <Link to="/account">Account</Link>
                      ) : (
                        <Link to="/auth">Account</Link>
                      )}
                    </NavTitles>
                    {/* <NavTitles><Link to="/auth">Auth Testing</Link></NavTitles> */}
                    <NavTitles>
                        {user ? (
                            <button class="loginandoutbutton" onClick={logout}>Logout</button>
                        ) : (
                        <Link to="/auth">
                        <button class="loginandoutbutton" type="button">
                             Sign In
                        </button>
                    </Link>
                        )}
                    </NavTitles>
                </NavbarStyling>
    )
};

export default Navbar;