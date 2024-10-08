import styled from "styled-components";

const BotaoEstilizado = styled.button`
    background-color: transparent;
    color: #FFFFFF;
    border: none;
    padding: 2px;
    height: auto;
    cursor: pointer;
`;

const BotaoIcone = ({ children, aoClicar, type = "button" }) => {
    return (
        <BotaoEstilizado type={type} onClick={aoClicar}>
            {children}
        </BotaoEstilizado>
    );
}

export default BotaoIcone;