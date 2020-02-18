import React, { useState, lazy, Suspense } from 'react';
import Square from 'components/Square';
const Grid = lazy(() => import('components/Grid'));

const TileEditor = () => {
  const [grid, setGrid] = useState('null');


  return (<div className="tile-editor">
    Tile Control
    <Square />
    {grid &&
      <Suspense fallback={<div>loading grid...</div>}>
        <Grid />
      </Suspense>
    }
  </div>)
}

export default TileEditor