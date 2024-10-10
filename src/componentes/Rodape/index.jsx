import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const FooterEstilizado = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    background: #04244F;
    margin-top: 73px;
    color: #FFFFFF;

    p {
        font-size: 16px;
    }
`;

const RedesSociais = styled.div`
    display: flex;
    gap: 35px;
`;

const Rodape = () => {
    return (
        <FooterEstilizado>
            <RedesSociais>
                <FaFacebook size={25}/>
                <FaTwitter size={25}/>
                <FaInstagram size={25}/>
            </RedesSociais>
            <p>Desenvolvido por Alura.</p>
        </FooterEstilizado>
    );
}

export default Rodape;