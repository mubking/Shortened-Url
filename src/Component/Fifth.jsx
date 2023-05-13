import React from 'react'
import styled from 'styled-components';
function Fifth() {
  return (
    <Wrapper>
    <div className='add'>
        <h1>Advanced Statistics </h1>
        <p>Track how are you your links are performing across the web with<br></br> our advanced statistics dashboard. </p>
    </div>
    </Wrapper>
    
    )
}
const Wrapper = styled.nav`
padding-top: 130px;
min-height: 100vh;
background-color: #F0F1F6;
.add{
    text-align: center;
    /* line-height:2vh; */
}
.add h1{
 font-size: 3.5vmax;
}
.add p{
    color: #BABAC3;
  font-size: 3.5vmin;
}
`
export default Fifth;