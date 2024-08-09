'use client';
import React, { ChangeEventHandler, useState } from 'react';
import S from '@/app/style'

const createGrid = ( rows : number, cols: number ) => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
};

const Home = () => {
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [grid, setGrid] = useState(createGrid(10, 10));

  const handleRowsChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    const newRows = parseInt(e.target.value, 10);
    setRows(newRows);
    setGrid(createGrid(newRows, cols));
  };

  const handleColsChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    const newCols = parseInt(e.target.value, 10);
    setCols(newCols);
    setGrid(createGrid(rows, newCols));
  };

  return (
    <S.Container>
      <S.Controls>
        <label>
          가로 :
          <input
            type='number'
            value={rows}
            onChange={handleRowsChange}
          />
        </label>
        <label>
          세로 :
          <input
            type='number'
            value={cols}
            onChange={handleColsChange}
          />
        </label>
      </S.Controls>
      <S.Grid>
        {grid.map((row, rowIndex) => (
          <S.Row key={rowIndex} >
            {row.map((col, colIndex) => (
              <S.Cell key={colIndex} />
            ))}
          </S.Row>
        ))}
      </S.Grid>
    </S.Container>
  );
};

export default Home;
