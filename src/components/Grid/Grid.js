import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const StyledGrid = styled.div`
  background-color: aquamarine;
  display: flex;
  flex-wrap: wrap;
  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};

`
const GridSquare = styled.div`

  box-sizing: border-box;
  border-right: 1px solid #b8b8b8;
  border-bottom: 1px solid #b8b8b8;

  height: ${({ height }) => height + "px"};
  width: ${({ width }) => width + "px"};
  &:nth-of-type(${({ gridSize }) => `${gridSize}n + 1`}){
    border-right: 1px solid #b8b8b8;
  }
  &:nth-of-type(${({ gridSize }) => '-n +' + gridSize}){
    border-top: 1px solid #b8b8b8;
  }
`

const Grid = ({ gridSize, squareSize }) => {
  const [grid, setGrid] = useState([]);
  // if grid size = 12, the map size will be 12x12 or 144 squares
  //Adjust grid weight and height based on size, each square is 45x45px

  useEffect(() => {

    generateGrid();

  }, [gridSize, squareSize])
  const generateGrid = () => {
    let newGrid = [];
    for (let w = 0; w < gridSize; w++) {
      for (let h = 0; h < gridSize; h++) {
        newGrid.push((<GridSquare
          gridSize={gridSize}
          width={squareSize}
          height={squareSize}
          key={`${w}${h}`}>{w},{h}</GridSquare>))
      }
    }
    setGrid([...newGrid]);
  }

  return (<StyledGrid width={gridSize * squareSize} height={gridSize * squareSize}>
    {grid.map(grid => grid)}
  </StyledGrid>)

}

export default Grid;