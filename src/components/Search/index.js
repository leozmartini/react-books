import Input from "../Input";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { getBooks } from "../../services/books";
import sampleImg from '../../images/livro.png'
import { postFav } from "../../services/favs";

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Response = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {

    const [searchedText, setSearchedText] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks();
    }, []); // [] Chama a arrowFunction quando o elemento dentro do array for modificado, vazio é no carregamento da página

    async function fetchBooks() {
        setBooks(await getBooks());
    }

    async function insertFav(id, name) {
        await postFav(id)
        alert(`O livro "${name}"(ID: ${id}) foi adicionado aos Favoritos.`)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar ?</Title>
            <SubTitle>Encontre o livro desejado em nossa estante.</SubTitle>
            <Input
                placeholder="Escreve sua próxima leitura"
                onBlur={event => {
                    const typedText = event.target.value;
                    const searchResponse = books.filter(book => book.name.includes(typedText)) // Filtra nomes de livros que contém o texto digitado no nome
                    setSearchedText(searchResponse) // Chama função do useState para definir o "searchResponse" na array "searchedText"
                }}
            />
            {searchedText.map(book => { // Se abrir direto com parenteses não é necessário return.
                return (
                    <Response onClick={() => insertFav(book.id, book.name)}>
                        <p>{book.name}</p>
                        <img src={sampleImg} alt='book-img' />
                    </Response>
                )

            })}
        </SearchContainer>
    )
}

export default Search