import React from 'react'
import styled  from 'styled-components';
import working from './../images/illustration-working.svg'
function Third() {
  return (
    <Wrapper>
    <div className="one">
        <div className="two">
            <h1>More Than Just  Shorter Links </h1>
            <p>Buildy Your brand's recognition and get detailed insights on how your links are performing .</p>
            <button>Get Started</button>
        </div>
        <div className="three">
            <img src={working} alt="" />
        </div>
    </div>
    </Wrapper>
    

    )
}
const Wrapper = styled.nav`
    padding:30px;
    min-height:100vh;

    .one{
        display:flex;
        flex-direction:row;
        gap:50px;
        justify-content:space-between;
    }
    .one h1{
        font-size:5.0vmax;
        color:#34313C;
    }
    .one p{
        font-size:3.5vmin;
        color:#B0AFB5;
    }
    .one button{
        font-size:3.5vmin;
        color:white;
        padding:15px 45px;
        border-radius:30px;
        background-color:#2BD1D1;
        border:none;
        cursor:pointer;
    }
    .one button:hover{
        background-color:black;
        color:white;
    }







   @media screen and (max-width:768px){
    min-height:100vh;
      
    .one{
        display:flex;
        flex-direction:column;
        gap:50px;
        justify-content:space-between;
    }
    .three img{
        width:100%;
    }
    } 
`

export default Third;