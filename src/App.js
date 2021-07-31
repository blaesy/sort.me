import styled from 'styled-components';
import NavBar from './NavBar';

const Wrapper = styled.div`
display: flex;
min-height: 100vh;
width: 100%;
background: #CEE8F2;
`;

const App = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  );
}

export default App;
