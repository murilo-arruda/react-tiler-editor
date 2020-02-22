import React, { useState } from 'react';

const Grid = ({ setGrid }) => {
  const [gridSize, setGridSize] = useState(10);
  const [squareSize, setSquareSize] = useState(45);

  const updateGrid = (e) => {
    e.preventDefault();
    setGrid(Number(gridSize), Number(squareSize));
  }
  return (<div>
    <form>
      <label>Grid Size
        <input
          type="number"
          name="gridsize"
          value={gridSize}
          onChange={e => setGridSize(e.target.value)}
        />
      </label>

      <label>Square Size
        <input
          type="number"
          name="squaresize"
          onChange={e => setSquareSize(e.target.value)}
          value={squareSize}
        />
      </label>
      <button onClick={updateGrid}>Go!</button>

    </form>
  </div>);

}

export default Grid;