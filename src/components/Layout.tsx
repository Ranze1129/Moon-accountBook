import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Layout = (props:any) => {
  return (
    <Wrapper>
      <Main>
        {props.children}
      </Main>
      <Nav/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
`;
export default Layout;