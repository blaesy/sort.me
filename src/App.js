import styled from 'styled-components';
import NavBar from './NavBar';
import SortingLayer from './SortingLayer';
import React from 'react';

const Wrapper = styled.div`
position: relative;
display: flex;
min-height: 100vh;
flex-direction: column;
width: 100%;
background: #EBEDF3;
overflow: hidden;
align-items: center;
`;

const Sorting = styled.div`
margin-top: 50px;
height: calc(100% - 100px);
`;

const App = () => {

  const [size, setSize] = React.useState(100);
  const [speed, setSpeed] = React.useState(125);

  const [rects, setRects] = React.useState([]);

  const populateRectangles = () => {
      setRects([]);
      for (let j = 1; j<=size; j++) {
          setRects(rects => [...rects, {value: j, order: j, active: false}]);
      }
  }
  const shuffle = (array) => {
      var currentIndex = array.length,  randomIndex;
      while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
  }
  const getShuffledArray = () => {
      
      let tempRects = shuffle(rects);
      setRects([]);
      let i = 0;
      let iterateWithDelay = () => {
          setTimeout( () => {
              setRects(rects => [...rects, tempRects[i]]);
              i++;
              if (i < size) 
                  iterateWithDelay();
                             
          }, 1000 / speed);
      }
      iterateWithDelay();
  }

  const bubbleSort = () => {
      let tempArray = rects;
      
      let startSorting = () => {
          let found = 0;
          let i = 0;
          let iterateThroughArray = () => {
              setTimeout(() => {
                  if (tempArray[i].value > tempArray[i+1].value) {
                      let tempItem = tempArray[i+1];
                      tempArray[i+1] = tempArray[i];
                      tempArray[i] = tempItem;
                      found++;
                      setRects([...tempArray]);
                  }
                  if (i < tempArray.length - 2)
                  {
                      i++;
                      iterateThroughArray();
                  } else if (found !== 0) {
                      startSorting();
                  }
              }, 1000 / speed)
          }
          iterateThroughArray();
      }
      startSorting();
  }

  const doSort = (sorts) => {
    switch(sorts) {
      case 'BUBBLE':
        bubbleSort();
        break;
      case 'QUICK':
        break;
      case 'INSERTION':
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setSize(10);
    setSpeed(100);
  }

  React.useEffect(() => {
      populateRectangles();
  }, [size])

  return (
    <Wrapper>
      <NavBar doSort={doSort} reset={reset} shuffle={getShuffledArray} size={size} setSize={setSize} speed={speed} setSpeed={setSpeed}/>
      <Sorting>
        <SortingLayer size={size} rects={rects}/>
      </Sorting>
    </Wrapper>
  );
}

export default App;
