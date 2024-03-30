import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavs } from '../services/favs';
import sampleImg from '../images/livro.png'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ResponseContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Response = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`



function Favoritos() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    fetchFavs()
  }, [])

  async function fetchFavs() {
    setFavs(await getFavs())
  }

  return (
    <AppContainer>
      <div> 
        <Title>Aqui estão seus favoritos:</Title>
          <ResponseContainer>
            {
              favs.length !== 0 ? favs.map( fav => (
                  <Response>
                    <p>{fav.name}</p>
                    <img src={sampleImg} alt="book-img"/>                  
                  </Response>
                ) ) : null
            }
          </ResponseContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
