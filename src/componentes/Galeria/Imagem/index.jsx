import { FaExpandAlt, FaRegHeart, FaHeart } from "react-icons/fa";
import styled from "styled-components";
import BotaoIcone from "../../BotaoIcone";

const FigureEstilizada = styled.figure`
    width: ${(props) => props.$expandida ? "90%" : "448px"};
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
    }
`;

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
`;

const Operadores = styled.div`
    display: flex;
    gap: 20px;
`;

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    return (
        <FigureEstilizada $expandida={expandida}>
            <img src={foto.path} alt={foto.alt}/>
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>Fonte: {foto.fonte}</h4>
                    <Operadores>
                        <BotaoIcone aoClicar={() => aoAlternarFavorito(foto)}>
                            {
                                foto.favorita
                                    ? <FaHeart size={25}/>
                                    : <FaRegHeart size={25}/>
                            }
                        </BotaoIcone>
                        {!expandida && <BotaoIcone aoClicar={() => aoZoomSolicitado(foto)}>
                            {<FaExpandAlt size={25}/>}
                        </BotaoIcone>}
                    </Operadores>
                </Rodape>
            </figcaption>
        </FigureEstilizada>
    );
}

export default Imagem;