import styled, { css }from 'styled-components';
import React from 'react';
const NavWrapper = styled.div`
height: 50px;
width: 100%;
`;

const NavTop = styled.div`
display: flex;
height: 50px;
width: 100%;
padding: 0 100px;
box-sizing: border-box;
align-items: center;
background: rgba(69, 92, 123, 1);
color: white;
`;

const NavBottom = styled.div`
display: flex;
height: 50px;
width: 100%;
padding: 5px 100px;
box-sizing: border-box;
align-items: center;
justify-content: center;
background: rgba(69, 92, 123, 0.7);
color: white;
`;

const NavTopOption = styled.div`
display: flex;
justify-content: center;
position: relative;
align-items: center;
margin: 0 50px 0 0;
font-size: 18px;
transition: padding-top .1s ease-in-out;
border-radius: 3px;
box-sizing: border-box;
height: 100%;
${props => props.active && 'border-bottom: #AC6C82 6px solid;'}
${props => props.active && 'color: #AC6C82;'}
width: 100px;
padding: 5px 0;
transition: all .1s ease-in-out;
&:hover {
    cursor: pointer;  
}
`;

const NavTopSliderWrapper = styled.div`
display: flex;
height: 100%;
margin: 0 20px;
padding: 3px 0;
box-sizing: border-box;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 100%;
`;

const NavTopSlider = styled.input`
-webkit-appearance:none;
appearance: none;
width: 100%;
background: transparent;
outline:none;

&:hover {
    cursor: pointer;
}

&::-webkit-slider-runnable-track {
    height: 5px;
    background: #455C7B;
    border: none;
    border-radius: 3px;
}

&::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background:  white;
    margin-top: -5px;
}

`;

const NavTopSliderText = styled.div`
display: flex;
width: 100%;
align-items: space-between;
justify-content: space-between;
box-sizing: border-box;
padding: 0 10px;
`;

const NavTopButtonsWrapper = styled.div`
display: flex;
height: 100%;
margin: 0 0 0 auto;
padding: 3px 0;
box-sizing: border-box;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 100%;
`;

const NavButton = styled.button`
margin: auto;
height: calc(100% - 5px);
margin: 0 20px;
width: 100px;
outline: none;
border: none;
background: #455C7B;
color: white;
border-radius: 3px;
transition: all .1s ease-in-out;
&:hover {
    cursor: pointer;
    transform: scale(1.1);
}
`;

const NavBar = ({size, setSize, speed, setSpeed, reset, shuffle, doSort}) => {

    const [activeSort, setActiveSort] = React.useState('BUBBLE');

    return (
        <NavWrapper>
            <NavTop>
                <NavTopOption active={activeSort === 'BUBBLE'} onClick={() => setActiveSort('BUBBLE')}>Bubble</NavTopOption>
                <NavTopOption active={activeSort === 'QUICK'} onClick={() => setActiveSort('QUICK')}>Quick</NavTopOption>
                <NavTopOption active={activeSort === 'INSERTION'} onClick={() => setActiveSort('INSERTION')}>Insertion</NavTopOption>
            </NavTop>
            <NavBottom>
                <NavTopSliderWrapper>
                    <NavTopSliderText>
                        <span>SIZE</span>
                        <span>{size}</span>
                    </NavTopSliderText>
                    <NavTopSlider type="range" min="10" max="200" value={size} onChange={(e) => setSize(e.target.value)}/> 
                </NavTopSliderWrapper>
                <NavTopSliderWrapper>
                    <NavTopSliderText>
                        <span>SPEED</span>
                        <span>{speed}/s</span>
                    </NavTopSliderText>
                    <NavTopSlider type="range" min="100" max="200" value={speed} onChange={(e) => setSpeed(e.target.value)}/> 
                </NavTopSliderWrapper>
                <NavTopButtonsWrapper>
                    <NavButton onClick={() => reset()}>RESET</NavButton>
                    <NavButton onClick={() => shuffle()}>SHUFFLE</NavButton>
                    <NavButton onClick={() => doSort(activeSort)}>SORT</NavButton>
                </NavTopButtonsWrapper>
            </NavBottom>
        </NavWrapper>
    )
}

export default NavBar;