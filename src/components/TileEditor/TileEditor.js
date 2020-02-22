import React, { useState, lazy, Suspense } from 'react';
import Square from 'components/Square';
import GridForm from 'components/GridForm';

const Grid = lazy(() => import('components/Grid'));

const TileEditor = () => {
  const [grid, setGrid] = useState(false);
  const handleGrid = (gridSize, squareSize) => {
    setGrid({ squareSize, gridSize })
  }

  return (<div className="tile-editor">
    Tile Control
    <GridForm setGrid={(gridSize, squareSize) => handleGrid(gridSize, squareSize)} />
    <Square />
    {grid &&
      <Suspense fallback={<div>loading grid...</div>}>
        <Grid
          squareSize={grid.squareSize}
          gridSize={grid.gridSize}
        />
      </Suspense>
    }
  </div>)
}

export default TileEditor