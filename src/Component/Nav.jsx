import React from 'react';
import styled from 'styled-components';
import logo from './../images/logo.svg'

const Nav = () => {

  return (
    <Wrapper>
        <nav>
        <img src={logo} alt={logo} />
            <ul className='nav-desktop'>
                <NavItem title='Features' />
                <NavItem title='Pricing' />
                <NavItem title='Resources' />
                <NavItem title='Service' />
            </ul>
            <div className='login'>
            <button>Login</button>
            <button>Sign up</button>
            </div>
        </nav>
     </Wrapper>
  )
}

const NavItem = ({ title }) => {
  return (
    <li className='nav-link'>{title}</li>
  );
};

const Wrapper = styled.nav` 
     nav{
         width: 100%;
         display: flex;
         justify-content: space-around;
          color:#98959C;
          font-size:15px;
         
         align-items: center;
         height: 10vh;
         background-color: #FFFFFF;
     }
     .nav-desktop{
         list-style: none;
         margin-right: 400px;

     }
     .nav-link{
         margin-right: 20px;
         display: inline-block;
         cursor: pointer;
     }
     .login button{
     color:#98959C;
     margin-left:30px;
      padding:10px 40px;
      border-radius:30px;
      border:none;
      font-size:15px;
      background-color:transparent;
    }
     .login button:hover{
      background-color:#2BD4D1;
      margin-left:30px;
      padding:10px 40px;
      border-radius:30px;
      border:none;

    }
 `;

export default Nav;