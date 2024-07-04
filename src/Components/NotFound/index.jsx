import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  color: #555;
`;

const NotFound = ({message}) => {
  return (
    <NotFoundContainer>
      <Image src="img/carro-vacio.png" alt="No results" />
      <NotFoundMessage>No results found for "{message}" </NotFoundMessage>
    </NotFoundContainer>
  );
};

export default NotFound;
