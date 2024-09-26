import { FaExpandAlt, FaRegHeart } from "react-icons/fa";
import styled from "styled-components";

const FigureEstilizada = styled.figure`
    width: ${(props) => props.$expandida ? "90%" : "460px"};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;

    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }

    figcaption {
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        color: #FFFFFF;
        padding: 12px;

        h3 {
            font-size: 20px;
            margin: 0;
            font-family: "GandhiSansBold";
        }

        h4 {
            flex-grow: 1;
            font-weight: 100;
        }

        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }

        footer {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
        }
    }
`;

const Operadores = styled.div`
    display: flex;
    gap: 20px;

    button {
        background-color: transparent;
        color: #FFFFFF;
        border: none;
        padding: 2px;
        height: auto;
    }
`;

const Imagem = ({ foto }) => {
    return (
        <FigureEstilizada>
            <img src={foto.path}/>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <h4>Fonte: {foto.fonte}</h4>
                    <Operadores>
                        <button>{<FaRegHeart size={25}/>}</button>
                        <button>{<FaExpandAlt size={25}/>}</button>
                    </Operadores>
                </footer>
            </figcaption>
        </FigureEstilizada>
    );
}

export default Imagem;