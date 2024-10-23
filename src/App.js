import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ListaVagas from "./components/ListaVagas";
import styled from "styled-components";



const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;


const vagas = [
  {title: 'Frontend Developer', description: 'desenvolvimento de interfaces com React.'},
  {title: 'Backend Developer', description: 'Trabalho com Node.js e APIs RESTful.'},
];

const App = () => {
  return (
    <PageWrapper>
      <Header/>
      <Hero/>
      <Form/>
      <ListaVagas vagas={vagas} />
    </PageWrapper>
  );
};

export default App;