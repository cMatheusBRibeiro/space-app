import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagesContainer>
                        {fotos.map((foto) => <Imagem foto={foto}/>)}
                    </ImagesContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;