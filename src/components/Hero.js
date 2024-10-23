import React from "react";
import styled from "styled-components";


const HeroWrapper = styled.section`
    background-image: url('path/to/your/image/jpg');
    background-size: cover;
    height:400px;
    display: flex;
    align-items: center;
    justify-content; center;
    color: white;
`;

const HeroTitle = styled.h2 `
    font-size: 3rem;
    font-weight: bold;
`;

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroTitle>O seu emprego dos sonhos te Espera</HeroTitle>
        </HeroWrapper>
    );
};


export default Hero;