import React from "react";
import styled from "styled-components";
import Vaga from "./Vaga";

const ListaVagasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 20px auto;
`;

const ListaVagas = ({vagas}) => {
    return (
        <ListaVagasWrapper>
            {vagas.map((vaga, index)=> (
                <Vaga key={index} title={vaga.title} description={vaga.description} />
            ))}
        </ListaVagasWrapper>
    );
};

export default ListaVagas;