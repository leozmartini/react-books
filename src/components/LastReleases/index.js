import { books } from './LastReleasesData'
import {Title} from '../Title'
import RecommendedCard from '../RecommendedCard'
import imageBook from '../../images/livro2.png'
import styled from 'styled-components'

const LastReleasesContainer = styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
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
            <Title 
                color='#EB9B00'    
                fontSize='36px' 
            >Últimos lançamentos</Title>
            <NewBooksContainer>
                {
                    books.map(book => (
                        <img src={book.src} alt='LastReleaseBook' />
                    ))
                }
            </NewBooksContainer>

            <RecommendedCard 
                title="Talvez você se interesse por"
                subtitle="Angular 11"
                description="Construindo uma aplicação com a plataforma Google."
                img={imageBook}
            />

        </LastReleasesContainer>
    )
}

export default LastReleases