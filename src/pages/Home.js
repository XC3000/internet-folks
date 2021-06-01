import React from 'react'
import styled from 'styled-components';

const StyledPara = styled.p`
  font-size: ${(props) => props.theme.font.size.normal};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${(props) => props.theme.colors.neutral.verydarkblue};
`;

const Home = () => {
    return (
        <div>
            hi
        </div>
    )
}

export default Home
