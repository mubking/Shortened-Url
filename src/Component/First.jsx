import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

function First() {

  const [word, setword] = useState("");
  const [infortmation, setinfortmation] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const base_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        const response = await axios.get(base_url)
        setinfortmation(response.data)
      } catch (error) {
        console.error(error);
        
      }

    }

  

  return (
    <Wrapper>
      <form action="" onSubmit={handleSubmit}>
        <input type="search" value={word} onChange={(e) => setword(e.target.value)} name="" id="" />
        <button type="submit">Search</button>
      </form>
      <div>
        {
          infortmation && (
            <p>{infortmation[0].phonetic}</p>
          )
        }
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`


`
export default First;