import styled from 'styled-components';

const NavWrapper = styled.div`
height: 50px;
width: 100%;
`;

const NavTop = styled.div`
display: flex;
height: 50px;
width: 100%;
padding: 5px 100px;
box-sizing: border-box;
align-items: center;
overflow: auto;
`;

const NavTopOption = styled.div`
margin: 0 100px 0 0;
`;

const NavBar = () => {
    return (
        <NavWrapper>
            <NavTop>
                <NavTopOption>Bubble</NavTopOption>
                <NavTopOption>Quick</NavTopOption>
                <NavTopOption>Heap</NavTopOption>
                <NavTopOption>Test</NavTopOption>
            </NavTop>
        </NavWrapper>
    )
}

export default NavBar;