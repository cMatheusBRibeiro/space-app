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
import Rodape from "./componentes/Rodape";

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`;

const AppContainer = styled.div`
    width: 100%;
    max-width: 1440px;
    padding: 0 24px;
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
    const [filtroPorTexto, setFiltroPorTexto] = useState("");

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

    const aoDigitarFiltro = (campoFiltro) => {
        setFiltroPorTexto(campoFiltro.target.value);
    }

    useEffect(() => {
        const fotosFiltradas = fotosDaGaleria.filter((foto) => {
            const filtroPorTag = tagsSelecionadas.length === 0 || tagsSelecionadas.includes(foto.tagId);
            const filtroPorTitulo = !filtroPorTexto || foto.titulo.toLowerCase().includes(filtroPorTexto.toLowerCase());
            return filtroPorTag && filtroPorTitulo;
        });
        setFotosDaGaleriaFiltradas(fotosFiltradas);
    }, [fotosDaGaleria, tagsSelecionadas, filtroPorTexto]);

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
                <Cabecalho aoDigitarFiltro={aoDigitarFiltro} />
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
                <Rodape/>
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
