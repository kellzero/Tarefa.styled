import React from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px
`;

const Input = styled.input `
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;

`;

const Button  = styled.button`
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;


    &:hover {
        background-color: #0056b3;
    }
`;

const Form = () => {
    return (
        <FormWrapper>
            <Input type="text" placeholder="Procurar vagas" />
            <Button type="submit">Buscar</Button>
        </FormWrapper>
    );
};

export default Form;