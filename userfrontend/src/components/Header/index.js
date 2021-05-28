import React, { useEffect, useState } from 'react';
import './style.css';
import goldenStar from '../../images/logo/golden-star.png';
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login,signout } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const userLogin = () => {
    dispatch(login({ email, password }));
  }
  const logout = () =>{
    dispatch(signout());
  }
useEffect(() => {

    if (auth.authenticate) {
     setLoginModal(false);
    }
 
  }, [auth.authenticate]);
//for login users
  const renderLoggedInMenu = () => {
   
    return (
      <DropdownMenu
    
        menu={
        <a className="name" >{auth.user.name}     </a>

        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wichlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'Logout',href:'',icon:null,onClick:logout}
        ]}
      />
    )
  }
//for nonloggin users
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="loginButton" onClick={() => setLoginModal(true)}>
          Login
          </a>
        }
        menus={[
          { label: 'My Profile', href: '', icon: null },
          { label: 'Orders', href: '', icon: null },
          { label: 'Wichlist', href: '', icon: null },
          { label: 'Rewards', href: '', icon: null },
          { label: 'Gift Cards', href: '', icon: null },
          { label: 'create account', href: '', icon: null }
        ]}


        firstMenu={
          <div className="firsmenu">
            <span>New C ustomer?</span>
            <a style={{ color: '#2874f0' }}>Sign Up</a>
          </div>
        }
      />
    )
  }



  return (
    <div className="header">
      <Modal visible={loginModal}
        onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Welcome to CLICK SUPERMALL !</p>
            </div>
            <div className="rightspace">
            <div className ="LoginInputContainer">
              <MaterialInput
                type="text"
                label="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <MaterialInput
                type="password"
                label="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              // rightElemnt={<a href="#">Forgot?</a>}
              />

              <MaterialButton
                title="Login"
                bgColor="#178a80"
                textColor="#ffff"
                style={{
                  margin: '40px 0'
                }}
                onClick={userLogin}
              />

             

            </div>
          </div>
        </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          {/* < a href="">
            <img src={flipkartLogo} className="logoimage" alt="" />
          </a> */}
          <a style={{ marginTop: '-10px' }}>
            <span className="clickText">Click </span>
            <span className="superText">Supermall</span>
            <image src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
        <div style={{
          padding: '0 10px'
        }}>
          <div className='searchInputContainer'>
            <input className="searchInput" placeholder={'search for products,brand and more'} />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874fo'
              }} />
            </div>
          </div>
        </div>

        <div className="rightMenu">
         {/* {renderNonLoggedInMenu()} */}
         {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Customer care', href: '', icon: null },
              { label: 'My Profile', href: '', icon: null },
              { label: 'About us', href: '', icon: null }
            ]}
          />
          <div>
            <a className="cart">
              <IoIosCart />
              <span style={{ margin: '0 10px' }}>Cart</span>
            </a>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Header