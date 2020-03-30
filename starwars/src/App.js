import React from 'react';
import './App.css';
import PeopleList from './components/PeopleList/PeopleList'
import People from './components/People/People';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    justify-content: space-evenly;
    justify-content: space-around;
  `

  return (
    <>
    <h1 className="Header">React Wars</h1>
    <Container>
      <PeopleList />
    </Container>
    </>
  );
}

export default App;