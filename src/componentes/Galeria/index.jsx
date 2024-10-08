import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`;

const SecaoFluida = styled.section`
    flex-grow: 1;
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const Galeria = ({ fotos = [], tagsSelecionadas = [], aoFotoSelecionada, aoAlternarFavorito, aoAlternarSelecaoDeTag }) => {
    return (
        <>
            <Tags
                tagsSelecionadas={tagsSelecionadas}
                aoAlternarSelecaoDeTag={aoAlternarSelecaoDeTag}
            />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <ImagesContainer>
                        {fotos.map((foto) => 
                            <Imagem
                                foto={foto}
                                aoZoomSolicitado={aoFotoSelecionada}
                                key={foto.id}
                                aoAlternarFavorito={aoAlternarFavorito}
                            />
                        )}
                    </ImagesContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    );
}

export default Galeria;