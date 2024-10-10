import styled from "styled-components";

import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import imagemBanner from "./assets/banner.png";
import Galeria from "./componentes/Galeria";
import ConteudoGaleria from "./componentes/ConteudoGaleria";
import fotos from "./fotos.json";
import tags from "./componentes/Galeria/Tags/tags.json";
import { useEffect, useState } from "react";
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
    const [fotoSelecionada, setFotoSelecionada] = useState(null);
    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
    const [fotosDaGaleriaFiltradas, setFotosDaGaleriaFiltradas] = useState(fotos);
    const [tagsSelecionadas, setTagsSelecionadas] = useState([]);

    const aoAlternarFavorito = (foto) => {
        foto.favorita = !foto.favorita;

        if (fotoSelecionada) {
            setFotoSelecionada(foto);
        }

        setFotosDaGaleria(fotosDaGaleria.map((fotoDaGaleria) => {
            if (fotoDaGaleria.id === foto.id) {
                return foto;
            }
            return fotoDaGaleria;
        }));
    }

    const aoAlternarSelecaoDeTag = (tag) => {
        if (tag === 0) {
            if (tagsSelecionadas.length === tags.length) {
                setTagsSelecionadas([]);
                return;
            }
            setTagsSelecionadas(tags.map((t) => t.id));
            return;
        }
        if (tagsSelecionadas.includes(tag)) {
            setTagsSelecionadas(tagsSelecionadas.filter((tagSelecionada) => tagSelecionada !== tag));
        } else {
            setTagsSelecionadas([...tagsSelecionadas, tag]);
        }
    }

    useEffect(() => {
        if (tagsSelecionadas.length === 0) {
            setFotosDaGaleriaFiltradas(fotosDaGaleria);
            return;
        }
        setFotosDaGaleriaFiltradas(fotosDaGaleria.filter((foto) => tagsSelecionadas.includes(foto.tagId)));
    }, [fotosDaGaleria, tagsSelecionadas]);

    useEffect(() => {
        if ((tagsSelecionadas.length === tags.length - 1) && (!tagsSelecionadas.includes(0))) {
            setTagsSelecionadas(tags.map((t) => t.id));
            return;
        }
        if ((tagsSelecionadas.length < tags.length) && (tagsSelecionadas.includes(0))) {
            setTagsSelecionadas(tagsSelecionadas.filter((t) => t !== 0));
            return;
        }
    }, [tagsSelecionadas]);

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
                            fotos={fotosDaGaleriaFiltradas}
                            tagsSelecionadas={tagsSelecionadas}
                            aoAlternarFavorito={aoAlternarFavorito}
                            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                            aoAlternarSelecaoDeTag={aoAlternarSelecaoDeTag}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom
                foto={fotoSelecionada}
                aoFechar={() => setFotoSelecionada(null)}
                aoAlternarFavorito={aoAlternarFavorito}
            />
        </FundoGradiente>
    );
}

export default App;
