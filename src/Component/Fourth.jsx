import React, { useState } from 'react';
import styled from 'styled-components';
import shortenBg from './../images/bg-shorten-desktop.svg';
import axios from 'axios';

function Fourth() {
  const [originalUrl, setoriginalUrl] = useState("");
  const [error, seterror] = useState("");
  const [shortUrl, setshortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!originalUrl) {
      seterror("Please enter a url")
    }

    try {
      const base_url = `https://api.shrtco.de/v2/shorten?url=${originalUrl}`;

      const response = await axios.get(base_url);
      setshortUrl(response.data)
      
      
    } catch (error) {
      seterror("Cannot shorten url")
    }

  }

  const handleClick = () => {
    navigator.clipboard.writeText(shortUrl.result.short_link);
  }


  return (
    <Wrapper>
      <div className="container">
      <Short>
        <form action="" onSubmit={handleSubmit}>
          <div className='field'>
            <input type='text' placeholder='Shorten a link here...' value={originalUrl} onChange={(e) => setoriginalUrl(e.target.value)} />
            <button type='submit'>Shorten it!</button>
          </div>
          {
        error && (
          <p>{error}</p>
        )
      }
        </form>
      </Short>

      </div>
      {
        shortUrl && (
          <div className='all'>
            <p>{shortUrl.result.original_link}</p>
            <p>{shortUrl.result.short_link}</p>
            <button onClick={handleClick}>Copy</button>
          </div>
        )
      }
    </Wrapper>
  );
}

const Wrapper = styled.nav`
position: relative;
top: 150px;
  .container{
    display: flex;
  justify-content: center;
  align-items: center;

  height: 30vh;
  width: 100%;
  }
  .all{
    display: flex;
    flex-direction: row;
    gap: 100px;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    align-items: center;
    background-color: #FFFFFF;
    text-align: center;
  }
  .all button{
    background-color: #2BD1D1;
    padding: 10px 60px;
    border-radius: 10px;
    border: none;

  }
`;

const Short = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  border-radius: 30px;
  width: 80%;
  height: 30vh;
  background-color: #3A3053;
  background-image: url(${shortenBg});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  form{
    width: 100%;
  }
  .field{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  input[type='text'] {
    flex: 1;
    width: 70%;
    padding: 20px 20px;
    border: none;
    border-radius: 15px;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    /* text-align: center; */
    transition: all 0.3s ease-in-out;
    margin-right: 10px; /* add margin to the right of the input */

    &::placeholder {
      color: #bfbfbf;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #2acfcf;
    }
  }

  button[type='submit'] {
    background-color: #2acfcf;
    border: none;
    color: white;
    padding: 20px 40px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 30%;
  }
    &:hover {
      /* background-color: #1dd1a1; */
    }
    @media screen and (max-width:768px){
      input[type='text'] {
    flex: 1;
    max-width: 50%;
    padding: 10px 10px;
    border: none;
    border-radius: 15px;
    font-size: 18px;
    color: #333;
    font-weight: 700;
    position:relative;
    right:50px;
    text-align: center;
    transition: all 0.3s ease-in-out;
    margin-right: 10px; /* add margin to the right of the input */

    &::placeholder {
      color: #bfbfbf;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #2acfcf;
    }
  }

  button[type='submit'] {
    background-color: #2acfcf;
    border: none;
    color: white;
    padding: 20px 2ZZ4RT567T0px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position:relative;
    right:50px;
    &:hover {
      background-color: #1dd1a1;
    } 
    }
    
  }
`;

export default Fourth;
