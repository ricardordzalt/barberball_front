import React from 'react';
import Body from './Body';
import Layout from './Layout';
import NavBar from './NavBar';
import Content from './Content';

const Home = () => {
  return (
    <Body title="Página Principal">
      <NavBar>Barber Ball</NavBar>
      <Layout>Página de bienvenida</Layout>
      <Content>
      </Content>
    </Body>
  );
};

export default Home;