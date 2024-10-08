import styled from "styled-components";

import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import imagemBanner from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import ConteudoGaleria from "./componentes/ConteudoGaleria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 24px;
    margin: 0 auto;
`;

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
`;

const App = () => {
    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Cabecalho />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner
                            texto="A galeria mais completa de fotos do espaço!"
                            backgroundImage={imagemBanner}
                        />
                        <Galeria
                            fotos={fotosDaGaleria}
                            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom foto={fotoSelecionada} />
        </FundoGradiente>
    );
}

export default App;
