import React from "react";
import styled from "styled-components";

const VagaWrapper =  styled.div `
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px 0;
    border-raidus: 8px;
`;

const JobTitle = styled.h3 `
    font-size: 1.5rem;
    margin-bottom: 10px;
`;

const JobDescription = styled.p `
font-size: 1rem;
`;

const Vaga = ({title, description }) => {
    return (
        <VagaWrapper>
            <JobTitle>{title}</JobTitle>
            <JobDescription>{description}</JobDescription>
        </VagaWrapper>
    );
};

export default Vaga;