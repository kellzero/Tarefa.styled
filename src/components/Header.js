import React from 'react';
import styled from 'styled-components';


const HeaderWrapper = styled.header`
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    margin: 0;
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    margin: 0;
    paddin: 0;
`;


const Header = () => {
    return(
        <HeaderWrapper>
            <Title> Lista de vagas </Title>
        </HeaderWrapper>    
    );
};

export default Header;