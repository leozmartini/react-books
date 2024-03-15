import { books } from './LastReleasesData'
import styled from 'styled-components'

const LastReleasesContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`


const Title = styled.h2`
width: 100%;
padding: 30px 0;
background-color: #FFF;
color: #EB9B00;
font-size: 36px;
text-align: center;
margin: 0;
`

const NewBooksContainer = styled.div`
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;
`


function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title>Últimos lançamentos</Title>
            <NewBooksContainer>
                {
                    books.map(book => (
                        <img src={book.src} alt='LastReleaseBook' />
                    ))
                }
            </NewBooksContainer>
        </LastReleasesContainer>
    )
}

export default LastReleases